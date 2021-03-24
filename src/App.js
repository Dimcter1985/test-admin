import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList } from './components/PostList';
import { PostEdit } from './components/EditForm';
import { PostCreate } from './components/CreateForm';
import { UserList } from './components/UserList';
import Dashboard from './components/Dashboard';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {

  return <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
}

export default App;
