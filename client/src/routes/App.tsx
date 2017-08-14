import * as React from 'react';
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { combineReducers, createStore, Dispatch } from 'redux'
import './App.css';

import About from './About';
import Login from './Login';

const logo = require('./react_logo.svg'); // tslint:disable-line no-var-requires

// REDUX STUFF
interface IProps {
  meta: IMeta,
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
    const {meta} = this.props
    return  (
      <div>
        <h3>Redux Connected: {meta.connected.toString()}</h3>
      </div>
    )
  }
}
const mapStoreToReduxDemo = store => {
  const {meta} = store

  return {
    meta
  }
}
const ConnectedReduxDemo = connect(mapStoreToReduxDemo)(ReduxDemo)

interface IMeta {
  connected: boolean,
  status: string,
}
const metaReducer = (state = {
  connected: false,
  status: 'disconnected',
},                   action): IMeta => {
  switch (action.type) {
    case 'CONNECT':
      return {
        connected: true,
        status: 'connected',
      }
    default:
      return state
  }
}
const rootReducer = combineReducers({
  meta: metaReducer
})

// tslint:disable-next-line no-string-literal
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const rootStore = enhancer(rootReducer) // , initialState);

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
        <BrowserRouter>
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
                <Route exact={true} path='/about' component={About}/>
              </div>
            </div>   

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const ReduxApp = props => (
  <Provider store={rootStore}>
    <App {...props} />
  </Provider>
)

export default ReduxApp;
