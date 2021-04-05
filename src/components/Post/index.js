import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField, ReferenceField } from 'react-admin';

export const PostShow  = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
              <TextField source="name" />
            </ReferenceField>
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);
