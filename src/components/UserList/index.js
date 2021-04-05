import * as React from "react";
import { useMediaQuery, makeStyles  } from '@material-ui/core';
import { 
    SimpleList,
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    ChipField, 
    NumberField } from 'react-admin';
import MyUrlField from '../MyUrlField'
import Paginator from '../Paginator'

const useStyles = makeStyles(theme => ({
    hiddenOnSmallScreens: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

export const UserList = props => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles();

    return  (<List {...props} title="Пользователи" pagination={<Paginator />} >
                {
                    isMobile ? (
                        <SimpleList
                        primaryText={record => record.username}
                        secondaryText={record => record.email}
                        tertiaryText={record => record.website}
                        />
                    ) : (
                        <Datagrid rowClick="edit">
                            <ChipField 
                            source="id"
                            headerClassName={classes.hiddenOnSmallScreens}
                            cellClassName={classes.hiddenOnSmallScreens}
                            />
                            <TextField source="username" />
                            <EmailField source="email" />
                            <MyUrlField source="website" />
                            <NumberField 
                            source="phone" 
                            headerClassName={classes.hiddenOnSmallScreens}
                            cellClassName={classes.hiddenOnSmallScreens}
                            />
                        </Datagrid>
                    )
                }

            </List>)
};