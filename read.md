[comment]: <> (importing dependencies ...)

const deps = require("./package.json").dependencies;

shared: [
    {
    ...deps,
    react: {
        singleton: true,
        requiredVersion: deps.react,
    },
    "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
    },
    "primeflex": {
        singleton:true,
        requiredVersion:deps["primeflex"]
    },
    "primereact": {
        singleton:true,
        requiredVersion:deps["primereact"]
    },
    "primeicons": {
        singleton:true,
        requiredVersion:deps["primeicons"]
    },
    },
],

[comment]: <> (Shared Module is not available for eager consumption) -> bootstrap.js file - error fix;

- publicPath: '/' - allows you to specify the base path for all the assets within your application.
- historyAPIFallback:boolean - will redirect 404s to /index.html.



























