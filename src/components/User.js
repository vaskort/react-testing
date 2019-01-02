import React from 'react';
import { connect } from "react-redux";
import './User.css';

const User = ({user}) => {
  return (
    <li className="user">
      {user.name}
    </li>
  )
}

export default User;