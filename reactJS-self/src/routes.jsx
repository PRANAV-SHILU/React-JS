import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./Home.jsx";
import Component from "./Component.jsx";
import InteractiveApp from "./InteractiveApp.jsx";
import UseStateHooks from "./UseStateHooks.jsx";
import UseRefHooks from "./UseRefHooks-UseEffect.jsx";
import CustomHooks from "./CustomeHooks.jsx";
import UseRefComponent from "./UseRefComponent.jsx";
import UseEffectComponent from "./UseEffectComponent.jsx";
import ReactHookForm from "./React form/ReactHookForm.jsx";
import Yup from "./React form/Yup.jsx";
import RhfYup from "./React form/RhfYup.jsx";
import NotFound from "./NotFound.jsx";
import AxiosGet from "./axios/AxiosGet.jsx";
import AxiosPost from "./axios/AxiosPost.jsx";
import Axios from "./axios/Axios.jsx";
import AxiosPutPatch from "./axios/AxiosPutPatch.jsx";
import ToastLayout from "./Toastify/ToastLayout.jsx";
import Redux from "./redux/Redux.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "component", Component: Component },
      { path: "interactive", Component: InteractiveApp },
      { path: "use-state", Component: UseStateHooks },
      {
        path: "use-ref",
        Component: UseRefHooks,
        children: [
          // { index: true },
          { path: "use-effect-component", Component: UseEffectComponent },
          { path: "use-ref-component", Component: UseRefComponent },
        ],
      },
      { path: "custom-hooks", Component: CustomHooks },
      {
        path: "axios",
        Component: Axios,
        children: [
          { index: true, Component: AxiosGet },
          { path: "axios-post", Component: AxiosPost },
          { path: "axios-put-patch", Component: AxiosPutPatch },
        ],
      },
      { path: "toast", Component: ToastLayout },
      { path: "redux", Component: Redux },
    ],
  },
  { path: "reacthookform", Component: ReactHookForm },
  { path: "yuplibrary", Component: Yup },
  { path: "rhf-yup", Component: RhfYup },

  { path: "*", Component: NotFound },
]);

export default router;
