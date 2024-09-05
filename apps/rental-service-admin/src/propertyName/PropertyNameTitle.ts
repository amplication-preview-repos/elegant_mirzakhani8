import { PropertyName as TPropertyName } from "../api/propertyName/PropertyName";

export const PROPERTYNAME_TITLE_FIELD = "id";

export const PropertyNameTitle = (record: TPropertyName): string => {
  return record.id?.toString() || String(record.id);
};
