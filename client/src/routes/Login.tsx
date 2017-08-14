import * as React from 'react';
import asteroid from '../config/asteroid';

export default class Login extends React.Component<{}, {username: string, password: string}> {
  constructor() {
    super()

    this.state = {
      password: '',
      username: '',
    }

    this.onUsernameInput = this.onUsernameInput.bind(this)
    this.onPasswordInput = this.onPasswordInput.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  onUsernameInput(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      username: e.currentTarget.value
    })
  }

  onPasswordInput(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      password: e.currentTarget.value
    })
  }

  handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    asteroid.loginWithPassword({
      password: this.state.password,
      username: this.state.username,
    })
    .then(result => {
      console.log({result}) // tslint:disable-line no-console
    })
    .catch(error => {
      console.error(error.message);
    });
  };

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleLogin(e)}>
        <div>
          <input
            value={this.state.username}
            onChange={this.onUsernameInput}
            type='text'
            name='username'
            placeholder='Username'
          />
        </div>
        <div>
          <input
            value={this.state.password}
            onChange={this.onPasswordInput}
            type='password'
            name='password'
            placeholder='Password'
          />
        </div>
        <div>(Username: admin | Password: pass)</div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
    )
  }
}
