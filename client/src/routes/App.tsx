import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css';

import About from './About';
import Login from './Login';

const logo = require('./react_logo.svg'); // tslint:disable-line no-var-requires

class App extends React.Component {
  render() {
    const Navigation = () => (
      <div className='App-navigation'>
        <ul>
          <li className='App-navigation--item'><Link to='/'>Home</Link></li>
          <li className='App-navigation--item'><Link to='/about'>About</Link></li>
        </ul>
      </div>
    )

    return (
      <div className='App'>
        <BrowserRouter>
          <div>

            <div className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h2>Welcome to React</h2>

              <Navigation />
            </div>

            <div className='App-intro'>
              <div className='react-router'>
                <Route exact={true} path='/' component={Login}/>
                <Route exact={true} path='/about' component={About}/>
              </div>
            </div>   

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
