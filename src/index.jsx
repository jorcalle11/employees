import React from 'react';
import ReactDOM from 'react-dom';
import users from './users';
import UserList from './components/user-list';

ReactDOM.render(<UserList users={users.data}/>, document.getElementById('app'));
