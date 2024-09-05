import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  available: boolean | null;
  city: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  state: string | null;
  updatedAt: Date;
  zipCode: string | null;
};
