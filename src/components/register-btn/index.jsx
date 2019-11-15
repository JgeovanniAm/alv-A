import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default () => {

  return (
    <div>
      <Link to="/register/sign-in" className="btn-register sing-in">sign in </Link>
      <Link to="/register/sign-up" className="btn-register sing-up">sign up </Link>
    </div>
  )
}