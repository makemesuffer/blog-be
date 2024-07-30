/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const { getDMMF } = require('@prisma/internals');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const schemaPath = path.resolve('prisma/schema.prisma');
const templatesDir = path.resolve('templates');
const outputDir = path.resolve('src/modules');

const typeMapping = {
  Int: 'number',
  String: 'string',
  Boolean: 'boolean',
  Float: 'number',
  DateTime: 'Date',
};

function splitFileName(model) {
  return model.replace(/(?!^)([A-Z])/g, '-$1');
}

async function generateCRUD() {
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  const dmmf = await getDMMF({ datamodel: schema });

  const models = dmmf.datamodel.models;

  for (const model of models) {
    const modelName = model.name;
    const fields = model.fields
      .filter((field) => !field.isId)
      .map((field) => ({
        name: field.name,
        type: typeMapping[field.type] || 'string',
      }));

    const moduleDir = path.join(
      outputDir,
      splitFileName(modelName).toLowerCase(),
    );
    const modelDir = path.join(moduleDir, 'models');

    await fs.ensureDir(moduleDir);
    await fs.ensureDir(modelDir);

    const repositoryTemplate = await fs.readFile(
      path.join(templatesDir, 'repository.ejs'),
      'utf-8',
    );
    const repositoryContent = ejs.render(repositoryTemplate, { modelName });
    const repositoryPath = path.join(
      moduleDir,
      `${splitFileName(modelName).toLowerCase()}.repository.ts`,
    );
    fs.writeFile(repositoryPath, repositoryContent);

    const serviceTemplate = await fs.readFile(
      path.join(templatesDir, 'service.ejs'),
      'utf-8',
    );
    const serviceContent = ejs.render(serviceTemplate, {
      modelName,
      fileName: splitFileName(modelName),
    });
    const servicePath = path.join(
      moduleDir,
      `${splitFileName(modelName).toLowerCase()}.service.ts`,
    );
    fs.writeFile(servicePath, serviceContent);

    const resolverTemplate = await fs.readFile(
      path.join(templatesDir, 'resolver.ejs'),
      'utf-8',
    );
    const resolverContent = ejs.render(resolverTemplate, {
      modelName,
      fileName: splitFileName(modelName),
    });
    const resolverPath = path.join(
      moduleDir,
      `${splitFileName(modelName).toLowerCase()}.resolver.ts`,
    );
    fs.writeFile(resolverPath, resolverContent);

    const moduleTemplate = await fs.readFile(
      path.join(templatesDir, 'module.ejs'),
      'utf-8',
    );
    const moduleContent = ejs.render(moduleTemplate, {
      modelName,
      fileName: splitFileName(modelName),
    });
    const modulePath = path.join(
      moduleDir,
      `${splitFileName(modelName).toLowerCase()}.module.ts`,
    );
    fs.writeFile(modulePath, moduleContent);

    const modelTemplate = await fs.readFile(
      path.join(templatesDir, 'model.ejs'),
      'utf-8',
    );
    const modelContent = ejs.render(modelTemplate, {
      modelName,
      fields,
    });
    const modelPath = path.join(
      modelDir,
      `${splitFileName(modelName).toLowerCase()}.model.ts`,
    );
    fs.writeFile(modelPath, modelContent);
  }
}

generateCRUD()
  .then(() => {
    console.log('CRUD generation is complete');
  })
  .catch((error) => {
    console.error('CRUD generation error -', error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
