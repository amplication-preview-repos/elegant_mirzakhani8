import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <BooleanField label="available" source="available" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zipCode" source="zipCode" />
      </Datagrid>
    </List>
  );
};
