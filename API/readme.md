# 🗄️ API — Mock REST API Server

> A local mock backend server built with **json-server** to simulate real REST API calls — used across all React projects in this repo for practice with GET, POST, PUT, PATCH, and DELETE.

---

## 📁 Files

| File | Purpose |
| --- | --- |
| [server.js](./server.js) | Main server — json-server with CORS headers, runs on port 3000 |
| [cors.js](./cors.js) | Custom CORS middleware for `localhost:5173` (Vite dev server) |
| [db.json](./db.json) | Users database — name, age, email, city, phone |
| [register.json](./register.json) | Auth database — name, mobile, password, isLoggedIn |
| [package.json](./package.json) | Project config — `npm start` runs `server.js` |

---

## 🗃️ Data Structure

### [db.json](./db.json) — General Users

Used for basic CRUD practice (fetch, add, edit, delete users).

```json
{
  "users": [
    { "id": "1", "name": "Maya Patel", "age": 34, "email": "...", "city": "Mumbai", "phone": "..." }
  ]
}
```

**Endpoints :**

| Method | Endpoint | Action |
| --- | --- | --- |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Add new user |
| PUT | `/users/:id` | Replace user |
| PATCH | `/users/:id` | Update user fields |
| DELETE | `/users/:id` | Delete user |

---

### [register.json](./register.json) — Auth Users

Used for login/register practice. Fields: `id`, `name`, `mobile`, `password`, `isLoggedIn`.

```json
{
  "users": [
    { "id": "1", "name": "Pranav Shilu", "mobile": "9033823598", "password": "pranav1234", "isLoggedIn": false }
  ]
}
```

**Endpoints auto-generated:**

| Method | Endpoint | Action |
| --- | --- | --- |
| GET | `/users` | Get all users |
| POST | `/users` | Register new user |
| PATCH | `/users/:id` | Update `isLoggedIn` status |

---

## 🚀 Running the Server

### Option 1 — Quick start with `db.json`

```bash
npx json-server db.json
```

Starts at `http://localhost:3000`

---

### Option 2 — With `register.json` + CORS middleware

```bash
json-server --watch register.json --port 3000 --middlewares ./cors.js
```

Uses [cors.js](./cors.js) to allow requests from `http://localhost:5173` (Vite).

---

### Option 3 — Production server via `node`

```bash
npm install
npm start
```

Runs [server.js](./server.js) — same as Option 2 but as a proper Node.js server. Used when deploying to **Render** or similar platforms.

---

## ⚙️ How [server.js](./server.js) Works

```js
const server = jsonServer.create();
const router = jsonServer.router("register.json");

// CORS — allow all origins
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(router);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`SecureAuth API running on port ${PORT}`);
});
```

---

## ⚙️ How [cors.js](./cors.js) Works

Custom middleware that specifically allows the **Vite dev server** (`localhost:5173`):

```js
res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
res.setHeader("Access-Control-Allow-Credentials", "true");

// Handle preflight requests
if (req.method === "OPTIONS") {
  res.statusCode = 204;
  res.end();
  return;
}
```

> Use [cors.js](./cors.js) when running locally with Vite.  
> Use [server.js](./server.js) (with `*` origin) when deploying to a cloud host like Render.
