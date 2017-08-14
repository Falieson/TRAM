import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { RouterHistory, Store } from '../redux/'

const ReduxRouter = (props: {children: React.ReactElement<{}>}) => (
  <Provider store={Store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={RouterHistory}>
      {props.children}
    </ConnectedRouter>
  </Provider>
)

export default ReduxRouter
