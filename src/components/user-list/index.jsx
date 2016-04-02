import React from 'react';
import UserRow from '../user-row';

class UserList extends React.Component {
  render() {
    return (
      <ul className="collection z-depth-1">
        {
          this.props.users.map((user) => {
            return <UserRow key={user.id}
              name={user.name.first}
              biography={user.biography}
              age={user.age}
              avatar={user.avatar}
              ocupation={user.ocupation}/>
          })
        }
      </ul>
    )
  }
}

export default UserList;
