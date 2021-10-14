export const namesAndEmailValidator = (firstName, lastName, email, setNameErrors) => {
    const currentNameErrors = [];
    const emailCheckExpression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (!firstName.length || !lastName.length || !email.length) {
        if (!firstName.length) {
            currentNameErrors.push('- Please add your first name.')
        }
        if (!lastName.length) {
            currentNameErrors.push('- Please add your last name.')
        }
        if (!email.length) {
            currentNameErrors.push('- Please add your email.')
        } else {
            if (!emailCheckExpression.test(email)) {
                currentNameErrors.push('- Please add a valid email.')
            }
        }
        setNameErrors(currentNameErrors)
        return false
    } else {
        setNameErrors([])
        return true
    }
}

export const datesValidator = (month, day, year, setDateErrors) => {
    const currentDateErrors = []
    if (!+month || !+day || !+year) {
      if (!+month) {
        currentDateErrors.push('- Please select Month.')
      }
      if (!+day) {
        currentDateErrors.push('- Please select Day.')
      }
      if (!+year) {
        currentDateErrors.push('- Please select Year.')
      }
      setDateErrors(currentDateErrors)
      return false
    } else {
      setDateErrors([])
      return true
    }
  }
