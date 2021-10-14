export const FirstNameTextAndInput = ({ firstName, setFirstName }) => {
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

export const MiddleNameTextAndInput = ({ middleName, setMiddleName }) => {
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

export const LastNameTextAndInput = ({ lastName, setLastName }) => {
    return (
        <>
            <div className='InputLabelText'>Last Name*</div>
            <input
                className='LastNameInput FormInput'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name'
            />
        </>
    )
}

export const EmailTextAndInput = ({ email, setEmail }) => {
    return (
        <>
            <div className='InputLabelText'>Email*</div>
            <input
                className='EmailInput FormInput'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
            />
        </>
    )
}

export const DateOfBirthInput = ({ month, setMonth, day, setDay, year, setYear, dateErrors }) => {
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let daysArray = [];
    let yearsArray = [];
    for (let i = 0; i < 31; i++) {
        daysArray.push(i + 1);
    }
    for (let i = 2021; i >= 2021 - 99; i--) {
        yearsArray.push(i);
    }

    return (
        <>
            <div className="FormTitleText">Date of Birth*</div>
            {dateErrors && dateErrors.map((error, i) => {
                return (
                    <div className='ErrorText' key={i}>{error}</div>
                )
            })}
            <div className='ParentDateDiv'>
                <div className='DateInputContainer'>
                    <div className='InputLabelText'>Month</div>
                    <select className='DateSelect' value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option selected disabled hidden>Month</option>
                        {months.map((monthNum, i) => {
                            return (
                                <option key={i} value={monthNum}>{monthNum}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='DateInputContainer'>
                    <div className='InputLabelText'>Day</div>
                    <select className='DateSelect' value={day} onChange={(e) => setDay(e.target.value)}>
                        <option selected disabled hidden>Day</option>
                        {daysArray.map((dayNum, i) => {
                            return (
                                <option key={i} value={dayNum}>{dayNum}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='DateInputContainer'>
                    <div className='InputLabelText'>Year</div>
                    <select className='DateSelect' value={year} onChange={(e) => setYear(e.target.value)}>
                        <option selected disabled hidden>Year</option>
                        {yearsArray.map((yearNum, i) => {
                            return (
                                <option key={i} value={yearNum}>{yearNum}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}
