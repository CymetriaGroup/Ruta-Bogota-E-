import { Field } from './field.interface';

export interface Configuration {
  fields: Field[];
  model: any;
  next: string;
  prev?: string;
};
