import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  available?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
