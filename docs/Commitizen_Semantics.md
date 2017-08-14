# Commitizen Semantics | Defining terminology for writing commits

## Type / Breadth

```text
? Select the type of change that you're committing: (Use arrow keys)
🌟  feat:     A new feature
🐞  fix:      A bug fix
🚓  test:     Testing improved with new or fixed tests
🔩  chore:    Doesn't modify src or test files
✏️  style:    Doesn't affect the meaning of the code (white-space, semi-colons, etc)
📚  docs:     Documentation only changes
🎨  refactor: Doesn't fix a bug or add a feature
💰  perf:     Improves performance with this change
🚀  build:    Build system config or external dependencies ($compile)
🚥  ci:       CI config files and scripts ($arch)
💊  revert:   Reverts a previous commit
```

## Scope / Topic (Epic)

```text
? Select the type of change that you're committing: feat:     A new feature
? Denote the scope of this change ($location, $browser, $compile, etc.):
```

A scope shouldn't be depnendent on a single library but describe the function of that library, so instead of "Meteor" or "Server" as a scope the correct scope is **"DATA"** because thats the functional piece the Meteor (/server directory) Server operates. But Meteor maybe removed one day. Also, one day `/server` maybe isolated in its own repo. Contributions can continue to be marked as `$data`  independent of Meteor or `/server` being changed.

```diagram
.
├── $arch      #  package installation & configuration
├── $compile   #  webpack, grunt, etc.
├── $contrib   #  commitizen, style (linting, prettier), typing (typescript, flowtyping)
├── $core      #  Everything else....
├── $data      #  pub/sub, methods (fetches/mutations)
└── $ui        #  modules (react)
```
