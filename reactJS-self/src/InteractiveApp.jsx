import "./App.css";
import Float from "./Interactive/FloatingPortal.jsx";
import Play from "./Interactive/Play.jsx";
import Portal from "./Interactive/PortalModal.jsx";
import Search from "./Interactive/Search.jsx";
import Component1 from "./Interactive/UseContext.jsx";
import SuspenseMSg from "./Interactive/Suspense.jsx";

function InteractiveApp() {
  return (
    <>
      <Play />
      <hr />
      <section>
        <Search/>
      </section>
      <Component1/>
      <Portal/>
      <Float/>
      <SuspenseMSg/>
    </>
  );
}

export default InteractiveApp;
