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

let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let daysArray = [];
let yearsArray = [];
for (let i = 0; i < 31; i++) {
  daysArray.push(i + 1);
}
for (let i = 2021; i >= 2021 - 99; i--) {
  yearsArray.push(i);
}
const DateOfBirthInput = ({ month, setMonth, day, setDay, year, setYear, dateErrors }) => {
  return (
    <>
      <div className="FormTitleText">Date of Birth*</div>
      <div className='ParentDateDiv'>
        <div className='DateInputContainer'>
          <div className='InputLabelText'>Month</div>
          <select className='DateSelect' value={month} onChange={(e) => setMonth(e.target.value)}>
            <option selected disabled hidden>Month</option>
          </select>
        </div>
        <div className='DateInputContainer'>
          <div className='InputLabelText'>Day</div>
          <select className='DateSelect' value={day} onChange={(e) => setDay(e.target.value)}>
            <option selected disabled hidden>Day</option>
          </select>
        </div>
        <div className='DateInputContainer'>
          <div className='InputLabelText'>Year</div>
          <select className='DateSelect' value={year} onChange={(e) => setYear(e.target.value)}>
            <option selected disabled hidden>Year</option>
          </select>
        </div>
      </div>
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
