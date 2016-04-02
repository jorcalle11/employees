import React from 'react';
import UserAvatar from '../user-avatar';

class UserRow extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <UserAvatar image={this.props.avatar} />
        <div className="separator">
          <span className="title">{this.props.name}</span>
          <p className="ocupation">{this.props.ocupation}</p>
          <p>{this.props.biography}</p>
          <span className="age">{this.props.age} años</span>
        </div>
      </li>
    )
  }
}

export default UserRow;
