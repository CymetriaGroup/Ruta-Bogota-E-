export interface Field {
  name: string;
  type: string;
  label: string;
  values: any[];
  isRequired: boolean;
  dependField?: string;
  dependValue?: string | boolean;
  invalid?: boolean;
  startYear?: number;
  endYear?: number;
  readOnly?: boolean;
}
