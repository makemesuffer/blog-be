import { registerAs } from '@nestjs/config';

export default registerAs('aws', () => ({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretKeyId: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  s3InputBucket: process.env.AWS_S3_INPUT_BUCKET,
  awsLogGroup: process.env.AWS_LOG_GROUP,
}));
