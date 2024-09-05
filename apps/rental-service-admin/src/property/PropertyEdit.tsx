import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="available" source="available" />
        <TextInput label="city" source="city" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <TextInput label="state" source="state" />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
