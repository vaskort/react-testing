import React from 'react';
import './User.css';

const User = ({user}) => {
  return (
    <li className="user">
      {user.name}
    </li>
  )
}

export default User;