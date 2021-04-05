import * as React from "react";
import { 
    Edit,
    ListButton,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

export const PostEdit = props => {
    return <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
            <ListButton basePath="/posts" label="Back" icon={<ChevronLeft />} />
        </SimpleForm>
    </Edit>
};
