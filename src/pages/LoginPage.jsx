import React, { Component } from "react";
import { getUser } from "../components/api";
import { navigate } from "@reach/router";

class LoginPage extends Component {
  state = {
    username: "",
    error: false
  };
  render() {
    return (
      <div>
        {this.props.loggedInUser ? (
          <div>
            <h1>Are you sure you want to log out?</h1>
            <form>
              <button>Logout</button>
            </form>
          </div>
        ) : (
          <div>
            <h1>Login Page</h1>
            <form onSubmit={this.submitUserName}>
              <label>
                Username{" "}
                <input
                  type="text"
                  placeholder="example: jessjelly"
                  onChange={e => {
                    this.updateUserName(e.target.value);
                  }}
                />
              </label>
              <button>Login</button>
            </form>
          </div>
        )}

        {this.state.error && <div>Invalid User</div>}
      </div>
    );
  }
  updateUserName = input => {
    this.setState({ username: input });
  };

  submitUserName = event => {
    event.preventDefault();
    getUser(this.state.username)
      .then(user => {
        this.props.logInUser(user);
        navigate("/");
      })
      .catch(() => this.setState({ error: true }));
  };
}

export default LoginPage;
