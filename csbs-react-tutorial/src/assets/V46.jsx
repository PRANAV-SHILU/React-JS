import { useState } from "react";
export default function V46() {
  const [data, setData] = useState({
    name: "Anil",
    address: {
      city: "Delhi",
      country: "India",
    },
  });

  const handleName = (val) => {
    // data.name = val;
    // setData({...data});

    // setData({ ...data, name: val });

    setData((prev) => ({ ...prev, name: val }));
  };

  const handleCity = (val2) => {
    // data.address.city = val2;
    // setData({ ...data });

    // setData({ ...data, address: { ...data.address, city: val2 } });

    setData((prev) => ({ ...prev, address: { ...prev.address, city: val2 } }));
  };

  return (
    <section>
      <h2>V46 - Nested state object update</h2>
      <input
        type="text"
        placeholder="update_name"
        value={data.name}
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="text"
        placeholder="update city"
        value={data.address.city}
        onChange={(event) => handleCity(event.target.value)}
      />
      <p>Name : {data.name}</p>
      <p>City : {data.address.city}</p>
      <p>Country : {data.address.country}</p>
    </section>
  );
}
