import * as React from 'react';
import { useListContext, TextField, ReferenceField, EditButton, ShowButton  } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const useStyles = makeStyles({
  root: {
    justifyContent: 'center'
  },
  content: {
    display: 'none'
  },
  avatar: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
});

const PostCard = () => {
    const { ids, data, basePath } = useListContext();
    const classes = useStyles();
    return (
        <div style={{ margin: '1em' }} className="card_wrap">
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader classes={{avatar: classes.avatar, content: classes.content}} avatar={<Avatar icon={<PersonIcon />} />}>
                </CardHeader>
                <CardContent>
                  <ReferenceField label="Post" record={data[id]} source="userId" reference="users" basePath="/users">
                    <TextField source="name" />
                  </ReferenceField>
                </CardContent>
                <CardContent>
                    <TextField record={data[id]} source="body" />
                </CardContent>
                <CardActions classes={{root: classes.root}}>
                    <EditButton resource="posts" basePath={basePath} record={data[id]} />
                    <ShowButton resource="posts" basePath={basePath} record={data[id]} />
                </CardActions>
            </Card>
        )}
        </div>
    );
};

export default PostCard