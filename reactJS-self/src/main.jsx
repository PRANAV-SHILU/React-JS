// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./routes.jsx";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./app/store.js";
import { store, persistor } from "./redux/app/store.js";
import router from "./routes.jsx"; // your createBrowserRouter instance
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<div>Loading persistor...</div>}
      >
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
