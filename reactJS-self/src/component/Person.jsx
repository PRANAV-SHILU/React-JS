import "../assets/css/person.css";

const details = {
  name: "Pranav",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function Person() {
  return (
    <section>
      <div style={details.theme}>
        <h1>{details.name}'s todo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </section>
  );
}

export default Person;
