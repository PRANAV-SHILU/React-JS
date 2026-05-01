import { useState } from "react";
import { filterItems } from "./SearchData";

export default function Search() {
  const [query, setQuery] = useState("");
  const results = filterItems(query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name} : </td>
            <td> {food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
