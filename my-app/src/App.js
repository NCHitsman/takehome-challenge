import image from "./images/undraw_welcoming_xvuq.svg";
import { useState } from 'react';
import './App.css';

const FirstNameTextAndInput = ({ firstName, setFirstName }) => {
  return (
    <div className='FirstNameContainer'>
      <div className='InputLabelText'>First Name*</div>
      <input
        className='FirstNameInput FormInput'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder='First Name'
      />
    </div>
  )
}

const MiddleNameTextAndInput = ({ middleName, setMiddleName }) => {
  return (
    <div className='MiddleNameContainer'>
      <div className='InputLabelText'>Middle Name</div>
      <input
        className='FormInput'
        type='text'
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        placeholder='Middle'
      />
    </div>
  )
}

const LastNameTextAndInput = ({ lastName, setLastName }) => {
  return (
    <>
      <div className='InputLabelText'>Last Name</div>
      <input
        className='LastNameInput FormInput'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder='Last Name*'
      />
    </>
  )
}

const DateOfBirthInput = ({ month, setMonth, day, setDay, year, setYear, dateErrors }) => {
  return (
    <>
      <div className="FormTitleText">Date of Birth*</div>
    </>
  )
}

const App = (db) => {
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
        <div className='FormTitleText'>Full Legal Name</div>
        <div className='FirstMiddleContainer'>
          <FirstNameTextAndInput firstName={firstName} setFirstName={setFirstName} />
          <MiddleNameTextAndInput middleName={middleName} setMiddleName={setMiddleName} />
        </div>
        <LastNameTextAndInput lastName={lastName} setLastName={setLastName} />
        <DateOfBirthInput
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          year={year}
          setYear={setYear}
          dateErrors={dateErrors}
        />
      </form>
    </div>
  );
}

export default App;
