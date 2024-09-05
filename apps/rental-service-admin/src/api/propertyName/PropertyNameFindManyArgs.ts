import { PropertyNameWhereInput } from "./PropertyNameWhereInput";
import { PropertyNameOrderByInput } from "./PropertyNameOrderByInput";

export type PropertyNameFindManyArgs = {
  where?: PropertyNameWhereInput;
  orderBy?: Array<PropertyNameOrderByInput>;
  skip?: number;
  take?: number;
};
