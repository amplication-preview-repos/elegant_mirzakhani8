import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  available?: boolean | null;
  city?: string | null;
  description?: string | null;
  price?: number | null;
  state?: string | null;
  zipCode?: string | null;
};
