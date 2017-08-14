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
const rootReducer = {
  meta: metaReducer
}

export default rootReducer
