import { SET_USER, UNSET_USER } from './actions/userActions';

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

const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UNSET_USER:
      return null;
    default:
      return state;
  }
};

const rootReducer = {
  meta: metaReducer,
  user
}

export default rootReducer
