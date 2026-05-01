# API Server

This project uses [json-server](https://github.com/typicode/json-server) to mock REST APIs.

## Running the Server

### Default Server
To start the server with `db.json`:

```bash
npx json-server db.json
```

### Register Server
To start the server with `register.json` on port 3000 with CORS middleware:

```bash
json-server --watch register.json --port 3000 --middlewares ./cors.js
```
