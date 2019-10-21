import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../pages/register.css';

class Logup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "", password: ""
    }
  }

  render() {
    return (
      <div className="wrapper-form">
        <button className="close" onClick={e => this.props.close()} >X</button>
        <h1 className="title-login">signup</h1>
        <form className="form-register">
          <input
            type="text"
            placeholder="user"
            name="user"
            value={this.state.user}
            className="input-ui"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            className="input-ui"
          />
          <input
            type="submit"
            value="Send"
            className="input-send"
          />
        </form>
      </div>
    )
  }
}

export default withRouter(Logup)