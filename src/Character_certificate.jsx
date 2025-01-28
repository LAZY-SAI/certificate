import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Background from "./assets/frame1.png";
function Character() {
  const [stu, setStu] = useState();
  function handlename(event) {
    setStu(event.target.value);
  }
  return (

     <div className="Char_container">
      <img src={Background} alt=""/>
      <div className="inside_container">
        <div className="header">
          <p>Graduation Certificate for </p>
          <span>{stu}</span><br/>
          <span>
            <hr /> <FontAwesomeIcon icon={faMedal} /> <hr />
          </span>
        </div>
        <div className="Content">
          <p>
            This is to certify that <input value={stu} type="text" onChange={handlename} placeholder="student name" required/>  
            Child of <input type="text" placeholder="parents_name" required/> resident
            of <input type="text" placeholder="address" required/>
            was a bonafide student of this school from <input type="date" required/> A.D
            to <input type="date" required/>
            A.D and passed the B.L.E/S.E.E held on <input type="date" required/> A.D
            scoring <input type="value" required/> GPA. He/She were a sincere student
            with good moral character during He/She school Time.
          </p>
        </div>
        <div className="reg-num">
      <span>Registration No: <input type="number"/></span>
      <span>Symbol No:<input type="number"/></span>
    </div> 
      </div>
    </div>
   
 
   
  );
}
export default Character;
