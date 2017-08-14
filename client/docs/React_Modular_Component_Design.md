# React Modular Component Design

Scaleable, Sustaineable way to build a React Library
---

------

### Vocabulary
-- a atom is used in combination w/ other atoms to create a component
-- a component is a usable piece of ui code
-- a module is a grouping of components that interact
-- a library is a collection of modules and components
-- a abstraction interface is a type of library that is used to develop the application while providing a single implementation type. especially useful for default 3rd party settings and swapping out 3rd party libraries.


### Module vs Counter
ui/lib/counter/
-- CounterComponent: completely involved in its own context

ui/lib/tasks/
-- TasksModule: manages the context of its children components
---- TasksHeaderComponent
---- TasksItemComponent
---- TasksListComponent

#### UI Lib
The ui/lib directory contains components to be used. It is an abstraction interface to everything 1st or 3rd party. This makes it really easy to change my libraries without changing every implementation of the library.

#### UI Src
The ui/src directory contains components I make which aren't 3rd party. Rarely will I use anything from src directly in the application, it should get wrapped by a "lib" component to make it easy to swap out with a 3rd party library down the road.
