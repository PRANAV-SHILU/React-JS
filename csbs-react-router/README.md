# React Router Learning Project

This codebase demonstrates React Router concepts for learning purposes.

## Key Components and Features:

- **App.jsx**: Main app with routing setup using React Router v7
- **NavBar.jsx**: Navigation component
- **Home.jsx**: Simple home page
- **About.jsx**: About page
- **Login.jsx & Register.jsx**: Authentication pages with links
- **Users.jsx**: Lists users with dynamic routing links
- **UserDetails.jsx**: Shows user details using URL params
- **College.jsx**: Nested layout with Outlet for sub-routes
- **Student.jsx & Details.jsx**: Nested pages under College
- **Department.jsx**: Standalone department page
- **V59.jsx**: User list with CRUD (fetch, delete from API)
- **V60Add.jsx**: Add user form (POST to API)
- **V62Edit.jsx**: Edit user form (PATCH to API)
- **PageNotFound.jsx**: 404 page

## Routing Demonstrations:

- Basic routes (/, /about)
- Dynamic routes (/users/:id/:name?)
- Nested routes (/college with index and /details)
- Prefix routes (/user/login, /user/register)
- Catch-all route (\*)
- Layout routes with NavBar
- Programmatic navigation (useNavigate)
