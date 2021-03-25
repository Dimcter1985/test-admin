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
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: 'blue'
      }
    }
  }
});

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {

  return <Admin 
          title='Панель администратора' 
          dashboard={Dashboard} 
          authProvider={authProvider} 
          dataProvider={dataProvider} 
          theme={theme}
          >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
}

export default App;
