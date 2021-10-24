import { Document } from "mongoose";
export abstract class Repository<T, U extends Document> {
  abstract build(model: T): U;
}
