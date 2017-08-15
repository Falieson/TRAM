import { IAsteroid } from '../config/asteroid'
import { Store, userActions } from '../redux/';
const { setLoggedUser, unsetLoggedUser } = userActions

const Users: IAsteroid = {
  publication: 'users',
  ddp: {                  // tslint:disable-line object-literal-sort-keys
    onAdded(doc: any) {   // tslint:disable-line no-any
      if (doc.collection === 'users') {
        Store.dispatch(setLoggedUser(doc.fields));
      }
    },
    onRemoved(doc: any) { // tslint:disable-line no-any
      if (doc.collection === 'users') {
        Store.dispatch(unsetLoggedUser());
      }
    }
  }
}

export default Users
