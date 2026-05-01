import { useReducer } from "react";

const emptyData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

export default function V67() {
  const [data, dispatch] = useReducer(reducer, emptyData);
  console.log(data);

  return (
    <section style={{ display: "grid", gap: "10px" }}>
      <h2>V67 - useReducer</h2>

      <input
        type="text"
        placeholder="name"
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
        name="name"
      />

      <input
        type="text"
        placeholder="email"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
        name="email"
      />

      <input
        type="text"
        placeholder="phone"
        onChange={(e) => dispatch({ val: e.target.value, type: "phone" })}
        name="phone"
      />

      <input
        type="text"
        placeholder="address"
        onChange={(e) => dispatch({ val: e.target.value, type: "address" })}
        name="address"
      />

      <input
        type="text"
        placeholder="city"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
        name="city"
      />

      <div>
        <ul>
          <li>name : {data.name}</li>
          <li>email : {data.email}</li>
          <li>phone : {data.phone}</li>
          <li>city : {data.city}</li>
          <li>address : {data.address}</li>
        </ul>
      </div>
    </section>
  );
}
