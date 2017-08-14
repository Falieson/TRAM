import { keaReducer, keaSaga } from 'kea' 
import { routerMiddleware as createRouterMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import { RootReducer, RouterHistory } from './'
const finalReducer = combineReducers({
  router: routerReducer,
  scenes: keaReducer('scenes'),
  ...RootReducer,    
})

function configureStore(initialState: {}) {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(RouterHistory)

  // tslint:disable-next-line no-string-literal
  const enhancedStore = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
  const store = enhancedStore(
    finalReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware
      )
    )
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

const finalStore = configureStore(window.__INITIAL_STATE__)
finalStore.runSaga(keaSaga)

export default finalStore
