import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'simonjefford',
        avatar_url: 'https://avatars2.githubusercontent.com/u/136?v=4',
        html_url: ''
      },
      {
        id: '2',
        login: 'josh',
        avatar_url: 'https://avatars2.githubusercontent.com/u/137?v=4',
        html_url: 'https://github.com/josh'
      },
      {
        id: '3',
        login: 'cheapRoc',
        avatar_url: 'https://avatars2.githubusercontent.com/u/140?v=4',
        html_url: 'https://github.com/cheapRoc'
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
