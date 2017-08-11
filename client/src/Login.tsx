import * as React from 'react';
import asteroid from './config/asteroid';

const Login = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    asteroid.loginWithPassword({
      username: 'admin',
      password: 'pass',
    })
    .then((result) => {
      // console.log({result})
    })
    .catch((error) => {
      console.error(error.message);
    });
  };
  const form = () => (
    <form onSubmit={(e) => handleLogin(e)}>
      <div>
        <input value="admin" type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <input value="pass" type="password" name="password" placeholder="Password" />
      </div>
      <div>(Username: admin | Password: pass)</div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
  return <div>{form()}</div>;
};

export default Login;
