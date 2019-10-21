import React, { Component } from 'react';
import SignUp from '../components/register/Form';
import '../styles/register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      typeRegister: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen }, () => {
      e.target.name === 'signIn' ? this.setState({ typeRegister: 'signIn' }) : this.setState({ typeRegister: 'signUp' })
    })
  }

  render() {
    const { isOpen } = this.state;
    const {typeRegister} = this.state;
    return (
      <React.Fragment>
        <div className="wrapper-register">
          <div className="position-grid">
            <h1 className="title-register">Register</h1>
            <button name="signIn" onClick={this.handleClick}>Sign In</button>
            <button name="signUp" onClick={this.handleClick}>sign Up</button>
          </div>
        </div>
        {
          isOpen && <SignUp stateBtn={isOpen} typeRegister={typeRegister} close={e => this.handleClick}/>
        }
      </React.Fragment>
    )
  }
}

export default Register