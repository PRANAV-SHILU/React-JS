import { useState } from "react";

export default function V23() {
  const [gender, setGender] = useState("male");
  const [selected, setSelected] = useState("React");
  return (
    <section>
      <h3>V23 - Radio & Select </h3>

      <h4>Select gender : </h4>

      <input type="radio" name="gen" id="male" onChange={(e)=>setGender(e.target.value)} checked={gender === "male"} value="male"/>
      <label htmlFor="male"> Male</label>

      <input type="radio" name="gen" id="female" onChange={(e)=>setGender(e.target.value)} checked={gender === "female"} value="female"/>
      <label htmlFor="female"> Female</label>
      
      <p> Selected gender is : {gender} </p>

      <h4>Select :</h4>
      <select name="skills" value={selected} onChange={(e)=>setSelected(e.target.value)}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
      </select>
      <p>Selected skill is : {selected}</p>
    </section>
  );
}
