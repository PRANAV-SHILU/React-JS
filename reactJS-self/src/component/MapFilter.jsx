import { People } from "./Data.jsx";
import { GetImageUrl } from "./Url.jsx";

export default function MapFilter() {
  const chemists = People.filter((person) => person.profession === "chemist");

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={GetImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <section>
      <h1>Map Filter</h1>
      <ul>{listItems}</ul>
    </section>
  );
}
