typescript-react-asteroid-meteor
===

Cool subtitle
---

------

# Client (Node) & Server (Meteor) Architecture
This application is architected so the Frontend operates completely independently from the backend.

## Motivation
The future of Meteor is unknown, and as long as Meteor bundles isobuild and doesn't give a route for using webpack, there will be a need to leave Meteor's "unified" approach to development. And for more sophisticated developers - this is probably the more sustainable way to go anyways.
My specific motivation (this time) for seeking a Meteor ejector was meteor's community implementation of PostCSS for Isobuild is no longer maintained or working. I would recommend against anyone using LESS & SCSS for react development when there is PostCSS. PostCSS is modular, its where the community is, and its growing. Finally, I'm starting a new react application that should be built as independent from Meteor as possible; therefore why make a bunch of frontend code that uses Meteor's Isobuild for generating CSS assets when one day I'm definitely going to use PostCSS anyways and that will require (possible large) refactor from Meteor's LESS/SCSS to PostCSS.

In this new "asteroid" client/server world waht does Meteor do? What its great at (not frontend stuff), but providing a DDP connection to MongoDB for reactive (real-time)applications.

### Based on Asteroid example: "juliancwirko/react-redux-webpack-meteor"
the INIT commit is a clone of git+https://github.com/juliancwirko/react-redux-webpack-meteor.git

