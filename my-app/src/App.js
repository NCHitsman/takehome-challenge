import image from "./images/undraw_welcoming_xvuq.svg";
import { useState } from 'react';
import './App.css';
import {
  FirstNameTextAndInput,
  MiddleNameTextAndInput,
  LastNameTextAndInput,
  EmailTextAndInput,
  DateOfBirthInput
} from './InputComponents'
import { namesAndEmailValidator, datesValidator } from './Validators'

const App = ({ db }) => {
  const [nameErrors, setNameErrors] = useState([]);
  const [dateErrors, setDateErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('')
  const [day, setDay] = useState("Day");
  const [month, setMonth] = useState("Month");
  const [year, setYear] = useState("Year");
  const [sucessful, setSucessful] = useState(false);


  const submitHandler = (event) => {
    event.preventDefault()

    let datesResult = datesValidator(month, day, year, setDateErrors)
    let namesAndEmailResult = namesAndEmailValidator(firstName, lastName, email, setNameErrors)

    if (datesResult && namesAndEmailResult) {
      db.putItem('First Name', firstName);
      db.putItem('Middle Name', middleName ? middleName : null);
      db.putItem('Last Name', lastName);
      db.putItem('Email', email);
      db.putItem("Date of Birth", `${month}/${day}/${year}`);
      setSucessful(true);
    }
  }

  
  return (
    <div className="ParentAppDiv">
      <div className='ParentLogoDiv'>
        <img className="Logo" src='https://assets.website-files.com/60c388f99c5c910942ac67ed/613b9600834b2b70c257e18f_logo-text-and-icon-blurple.svg' alt='Logo'></img>
      </div>
      <img className="Img" src={image} alt="Img"></img>
      <div className="WelcomeText">Welcome!</div>
      <div className='WelcomeSubText'>Let's start with some basic info</div>

      <form className='FormParent' onSubmit={submitHandler}>
        <div className='FormTitleText'>Full Legal Name</div>
        {nameErrors && nameErrors.map((error, i) => {
          return (
            <div className='ErrorText' key={i}>{error}</div>
          )
        })}
        <div className='FirstMiddleContainer'>
          <FirstNameTextAndInput firstName={firstName} setFirstName={setFirstName} />
          <MiddleNameTextAndInput middleName={middleName} setMiddleName={setMiddleName} />
        </div>
        <LastNameTextAndInput lastName={lastName} setLastName={setLastName} />
        <EmailTextAndInput email={email} setEmail={setEmail} />
        <DateOfBirthInput
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          year={year}
          setYear={setYear}
          dateErrors={dateErrors}
        />
        <div className='ButtonContainer'>
          <div className="SucessContainer">
            {sucessful && "Data sucessfully collected!"}
          </div>
          <button type='submit' className='AcceptButton'>
            <div className='ButtonTextDiv'>
              <div>I Accept</div>
              <div className="Arrow">→</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
