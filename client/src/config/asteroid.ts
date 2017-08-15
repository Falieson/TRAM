// Connect to a Meteor backend
import { createClass } from 'asteroid';
const Asteroid = createClass();
const asteroid = new Asteroid({
  endpoint: 'ws://localhost:9000/websocket',
});

import Users from '../data/users'
const Collections = [Users]

export interface IAsteroid {
  publication: string,
  ddp: {
    onAdded: (doc: any) => void,    // tslint:disable-line no-any
    onRemoved: (doc: any) => void,  // tslint:disable-line no-any
  }
}
const subscriptions = Collections.map(c => c.publication)
const onAddeds = Collections.map(c => c.ddp.onAdded)
const onRemoveds = Collections.map(c => c.ddp.onRemoved)

// subscribe to publications for real-time updates
subscriptions.forEach(c => asteroid.subscribe(c))

// load the subscprion data into the redux store
asteroid.ddp.on('added', doc => onAddeds.forEach(process => process(doc)))
asteroid.ddp.on('removed', doc => onRemoveds.forEach(process => process(doc)))

export default asteroid;
