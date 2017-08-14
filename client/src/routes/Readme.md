# Routes | Screens/Pages for the user

```text
.
├── /src/                         # The source code of the application
    ├── /routes/                  # Page/screen components along with the routing information
        ├── /accounts/            # Account routes '/account/', '/account/:id/profile', etc.
        ├── /root/                # Root routes '/' '/about' etc.
            ├── /root-routes.ts   # mapping of routes to components to render
            ├── /home/            # resolution for '/'
            ├── /about/           # resolution for '/about'
        ├── routeMap.ts           # Index of all routes
        └── ...                   # Other core framework modules
```
