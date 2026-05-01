import "./App.css";
import Profile from "./component/Profile.jsx";
import Todo from "./component/Todo.jsx";
import Person from "./component/Person.jsx";
import PakingList from "./component/PakingList.jsx";
import List from "./component/Scientists.jsx";
import TeaSet from "./component/Teaset.jsx";
import Card from "./component/Card.jsx";
import MapFilter from "./component/MapFilter.jsx";

function Component() {
  return (
    <>
      <section>
        <h1>Katherine Johnson</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
      <hr />

      <Todo />
      <hr />

      <Person />
      <hr />

      <PakingList />
      <hr />

      <List />
      <hr />

      <TeaSet />
      <hr />

      <Card />
      <hr />

      <MapFilter />
      <hr />
    </>
  );
}

export default Component;
