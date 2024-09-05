import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  available?: BooleanNullableFilter;
  city?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  state?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
