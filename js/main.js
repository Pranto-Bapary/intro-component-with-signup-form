// Form Validation
function validate() {
    const firstName = document.getElementById('fName')
    const lastName = document.getElementById('lName')
    const emailAddress = document.getElementById('email')
    const password = document.getElementById('pass')
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // First Name Validation
    if (firstName.value === "") {
        firstName.style.borderColor = "red"
        document.querySelector('#fIcon').style.display = "block"
        document.querySelector('#fError').innerHTML = "First Name cannot be empty"
        firstName.focus()
        return false
    } else {
        firstName.style.borderColor = "var(--grayish-blue)"
        document.querySelector('#fIcon').style.display = "none"
        document.querySelector('#fCheck').style.display = "block"
        document.querySelector('#fError').innerHTML = ""
    }


    // Last Name Validation
    if (lastName.value === "") {
        lastName.style.borderColor = "red"
        document.querySelector('#lIcon').style.display = "block"
        document.querySelector('#lError').innerHTML = "Last Name cannot be empty"
        lastName.focus()
        return false
    } else {
        lastName.style.borderColor = "var(--grayish-blue)"
        document.querySelector('#lIcon').style.display = "none"
        document.querySelector('#lCheck').style.display = "block"
        document.querySelector('#lError').innerHTML = ""
    }


    // Email Address Validation
    if (emailAddress.value === "") {
        emailAddress.style.borderColor = "red"
        document.querySelector('#eIcon').style.display = "block"
        document.querySelector('#eError').innerHTML = "Email address cannot be empty"
        emailAddress.focus()
        return false
    } else if (!emailAddress.value.match(valid)) {
        emailAddress.style.borderColor = "red"
        document.querySelector('#eIcon').style.display = "block"
        document.querySelector('#eError').innerHTML = "Looks like this is not an email"
        emailAddress.focus()
        return false
    } else {
        emailAddress.style.borderColor = "var(--grayish-blue)"
        document.querySelector('#eIcon').style.display = "none"
        document.querySelector('#eCheck').style.display = "block"
        document.querySelector('#eError').innerHTML = ""
    }


    // Password Validation
    if (password.value === "") {
        password.style.borderColor = "red"
        document.querySelector('#pIcon').style.display = "block"
        document.querySelector('#pError').innerHTML = "Password cannot be empty"
        password.focus()
        return false
    } else if (password.value.length < 6) {
        password.style.borderColor = "red"
        document.querySelector('#pIcon').style.display = "block"
        document.querySelector('#pError').innerHTML = "Password should be atleast 6 characters long"
        password.focus()
        return false
    } else {
        password.style.borderColor = "var(--grayish-blue)"
        document.querySelector('#pIcon').style.display = "none"
        document.querySelector('#pCheck').style.display = "block"
        document.querySelector('#pError').innerHTML = ""
    }
}