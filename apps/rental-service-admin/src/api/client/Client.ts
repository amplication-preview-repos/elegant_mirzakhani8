import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
