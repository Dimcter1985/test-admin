import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { 
    SimpleList,
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    ChipField, 
    NumberField } from 'react-admin';
import MyUrlField from '../MyUrlField'

export const UserList = props => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return  (<List {...props}>
                {
                    isMobile ? (
                        <SimpleList
                        primaryText={record => record.username}
                        secondaryText={record => record.email}
                        tertiaryText={record => record.website}
                        />
                    ) : (
                        <Datagrid rowClick="edit">
                            <ChipField source="id" />
                            <TextField source="username" />
                            <EmailField source="email" />
                            <MyUrlField source="website" />
                            <NumberField source="phone" />
                        </Datagrid>
                    )
                }

            </List>)
};