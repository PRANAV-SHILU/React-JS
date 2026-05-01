import { People } from "./Data.jsx";
import { GetImageUrl } from "./Url.jsx";

const listItems = People.map((person) => (
  <li key={person.id}>
    <img src={GetImageUrl(person)} alt={person.name} />
    <p>
      <b>{person.name}:</b>
      {" " + person.profession + " "}
      known for {person.accomplishment}
    </p>
  </li>
));

export default function List() {
  return (
    <section>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </section>
  );
}
