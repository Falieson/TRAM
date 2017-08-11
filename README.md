# typescript-react-asteroid-meteor | Sustainable, Large Scale, Meteor-Independent

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Made with asteroid (ddp), create-react-app, typescript, react, and meteor

------

## Client (Node) & Server (Meteor) Architecture

This application is architected so the Frontend operates completely independently from the backend.

### Motivation

As long as Meteor bundles isobuild and doesn't give a route for using webpack, there will be a need to leave Meteor's "unified" approach to development. And for the more sophisticated developers - this is probably the more sustainable way to go, if you're even still using Meteor...

#### For the sake of PostCSS (this time)

My specific motivation for seeking a Meteor offramp is b/c the community implementation of PostCSS for Isobuild is no longer maintained or working. I would recommend against anyone using LESS & SCSS for react development when there is PostCSS. PostCSS is modular, its where the community is, and its growing. Finally, I'm starting a new react application that should be built as independent from Meteor as possible; therefore why make a bunch of frontend code that uses Meteor's Isobuild for generating CSS assets when one day I'm definitely going to use PostCSS anyways and that will require (possible large) refactor from Meteor's LESS/SCSS to PostCSS.

In this new "asteroid" client/server world waht does Meteor do? What its great at (not frontend stuff), but providing a DDP connection to MongoDB for reactive (real-time)applications.

#### Based on Asteroid example: "juliancwirko/react-redux-webpack-meteor"

the INIT commit is a clone of [juliancwirko/react-redux-webpack-meteor](https://github.com/juliancwirko/react-redux-webpack-meteor)

## Features

- [x] webpack2 (via create-react-app)
- [x] asteroid connection to meteor as ddp server
- [x] typescript config'd
- [x] tslint config'd

### Coming Soon

- [ ] react-router && react-router-redux
- [ ] tasklist module w/ unit testing
- [ ] Kea Redux
- [ ] local npm modules for large scale ui development
- [ ] meteor (/server) testing
- [ ] Jest unit testing w/ snapshots
