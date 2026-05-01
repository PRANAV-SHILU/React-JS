import "./App.css";
import FavColor from "./UseState hooks/FavColor.jsx";
import MyCar from "./UseState hooks/CarObject.jsx";
import Gallery from "./UseState hooks/ImageGallery.jsx";
import Form from "./UseState hooks/UseStateSendToFrom.jsx";
import Counter from "./UseState hooks/UseStateCounter.jsx";
import ImageForm from "./UseState hooks/UseStateImageForm.jsx";
import UseImmer from "./UseState hooks/UseImmerImageForm.jsx";
import CounterList from "./UseState hooks/ArrayCounter.jsx";
import ScrollToHash from "./ScrollToHash.jsx";
import { Link } from "react-router-dom";

function UseStateHooks() {
  return (
    <>
    <ScrollToHash/>
      <div>
        <Link to="#state">State</Link> | {" "}
        <Link to="#immer">Immer</Link> | {" "}
        <Link to="#array">Array</Link>
      </div>

      <FavColor />

      <MyCar />

      <Gallery />

      <Form />

      <Counter />

      <ImageForm />

      <UseImmer />

      <CounterList />
    </>
  );
}
export default UseStateHooks;
