import { useContext, useState, createContext } from "react";

const SubjectContext = createContext();

export default function V52() {
  const [data, setData] = useState("Science");
  return (
    <section
      style={{ backgroundColor: "yellow", padding: "10px", margin: "10px" }}
    >
      <select value={data} onChange={(e) => setData(e.target.value)}>
        <option value="Science">Science</option>
        <option value="Mathematics">Mathematics</option>
        <option value="English">English</option>
      </select>
      <button onClick={() => setData("")}>Clear</button>
      <SubjectContext value={data}>
        <h2>V52 - Contex API</h2>
        <College />
      </SubjectContext>
    </section>
  );
}

function College() {
  return (
    <div style={{ backgroundColor: "orange", padding: "10px", margin: "10px" }}>
      College Component
      <ClassComponent />
    </div>
  );
}

function ClassComponent() {
  return (
    <div
      style={{ backgroundColor: "skyblue", padding: "10px", margin: "10px" }}
    >
      Class Component
      <Student />
    </div>
  );
}

function Student() {
  return (
    <div
      style={{ backgroundColor: "lightgreen", padding: "10px", margin: "10px" }}
    >
      Student Component
      <Subject />
    </div>
  );
}

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div
      style={{ backgroundColor: "lightcoral", padding: "10px", margin: "10px" }}
    >
      Subject : {subject}
    </div>
  );
}
