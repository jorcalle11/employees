import React from 'react';

class UserAvatar extends React.Component {
  render() {
    return (
      <img className="image" src={this.props.image}></img>
    )
  }
}

export default UserAvatar;
