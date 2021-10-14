import image from "./images/undraw_welcoming_xvuq.svg";
import { useState } from 'react';
import './App.css';

function App(db) {
  const [nameErrors, setNameErrors] = useState([]);
  const [dateErrors, setDateErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("Day");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [sucessful, setSucessful] = useState(false);

  return (
    <div className="ParentAppDiv">
      <img className="img" src={image} alt="Img"></img>
    </div>
  );
}

export default App;
