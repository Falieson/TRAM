import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import { RootReducer, RouterHistory } from './'

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(RouterHistory)

// tslint:disable-next-line no-string-literal
const enhancedStore = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = enhancedStore(
  combineReducers({
    ...RootReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

export default store
