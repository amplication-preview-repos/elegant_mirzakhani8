import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  available?: boolean | null;
  city?: string | null;
  description?: string | null;
  price?: number | null;
  state?: string | null;
  zipCode?: string | null;
};
