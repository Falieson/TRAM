import * as React from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { Dispatch } from 'redux'

import ReduxRouter from '../components/ReduxRouter'
import About from './About';
import './App.css';
import Login from './Login';

const logo = require('./react_logo.svg'); // tslint:disable-line no-var-requires

interface IMeta {
  connected: boolean,
  status: string,
}
interface IProps {
  meta: IMeta,
  user: {username: string},
  dispatch: Dispatch<{}>,
}

class ReduxDemo extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }
  
  componentWillMount() {
    this.props.dispatch({type: 'CONNECT'})
  }
  
  render() {
    const {meta, user} = this.props
    return  (
      <div>
        {!!user && !!user.username ? (<h3>Logged in as: {user.username}</h3>) : (<h2>Log In!</h2>)}
        <h3>Redux Connected: {meta.connected.toString()}</h3>
      </div>
    )
  }
}
const mapStoreToReduxDemo = store => {
  const { meta, user} = store

  return {
    meta, user
  }
}
const ConnectedReduxDemo = connect(mapStoreToReduxDemo)(ReduxDemo)

class App extends React.Component<{}, {}> {
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
        <ReduxRouter>
          <div>

            <div className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h2>Welcome to React</h2>
              <ConnectedReduxDemo />

              <Navigation />
            </div>
            
            <div className='App-intro'>
              <div className='react-router'>
                <Route exact={true} path='/' component={Login}/>
                <Route path='/about' component={About}/>
              </div>
            </div>   

          </div>
        </ReduxRouter>
      </div>
    );
  }
}

export default App;
