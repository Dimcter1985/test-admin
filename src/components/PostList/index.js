import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { 
    List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    ChipField,
    Filter,
    TextInput,
    ReferenceInput,
    SelectInput,
    SimpleList
} from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return  (<List filters={<PostFilter />} {...props}>
                {isMobile ? 
                    (
                    <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => record.title}
                    />
                    )
                    : 
                    (
                    <Datagrid>
                        <ChipField source="id" />
                        <ReferenceField source="userId" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="title" />
                        <EditButton />
                    </Datagrid>
                    )}

            </List>)
};
