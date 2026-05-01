import { useState } from "react";

export default function CheckBox() {
  const [skills, setSkills] = useState([]);

  const handleSkill = (e) => {
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills([...skills.filter((item) => item !== e.target.value)]);
    }
  };

  return (
    <section>
      <div>
        <h3>V22 - Select your skills : </h3>

        <input onChange={handleSkill} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br />
        <br />
        <input onChange={handleSkill} type="checkbox" id="JS" value="js" />
        <label htmlFor="JS">JS</label>
        <br />
        <br />
        <input onChange={handleSkill} type="checkbox" id="HTML" value="html" />
        <label htmlFor="HTML">HTML</label>
        <br />
        <br />
        <input onChange={handleSkill} type="checkbox" id="CSS" value="css" />
        <label htmlFor="CSS">CSS</label>
        <br />
        <br />
      </div>

      <h2>Skills : {skills.toString()}</h2>
    </section>
  );
}
