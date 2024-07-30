interface CrudModel<T, CreateInput, UpdateInput> {
  create(args: { data: CreateInput }): Promise<T>;
  findUnique(args: { where: { id: number } }): Promise<T | null>;
  findMany(): Promise<T[]>;
  update(args: { where: { id: number }; data: UpdateInput }): Promise<T>;
  delete(args: { where: { id: number } }): Promise<T>;
}

export default CrudModel;
