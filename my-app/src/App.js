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

  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="ParentAppDiv">
      <img className="Img" src={image} alt="Img"></img>
      <div className="WelcomeText">Welcome!</div>
      <div className='WelcomeSubText'>Lest's start with some basic info</div>

      <form className='FormParent' onSubmit={submitHandler}>
        <div className='FormFullLegalText'>Full Legal Name</div>
      </form>
    </div>
  );
}

export default App;
