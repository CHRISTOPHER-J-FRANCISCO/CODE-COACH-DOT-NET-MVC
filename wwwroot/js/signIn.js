// Validates whether or not the username or password is correct
async function validateForm(event) {
    event.preventDefault(); // prevent auto submit
    //console.log("Hello");
    // Get the username and password
    let username = $('#username').val();
    let password = $('#password').val();

    // Validate the username
    let validatedUsername = validateUsername(username);
    // If the username is invalidated
    if (!validatedUsername) {
        alert("Username is invalid!");
        // let the user know their username is invalidated
        return false;
    }
    // Validate the password
    let validatedPassword = validatePassword(username, password);
    if (!validatedPassword) {
        alert("Username found! Password is invalid!");
        // Let the user know their password is invalidated
        return false;
    }
    // Username and password are valid
    console.log("Goodbye");
    return true;
}

// Validates the username
function validateUsername(username) {
    // If alphanumeric
    if (!isAlphanumeric(username)) {
        return false;
    }

    // If found in the database
    if (!isUsernameRegistered(username)) {
        return false;
    }

    return true;
}

// Is alphanumeric
function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]{8,32}$/.test(str);
}

// Is username registered in the database
async function isUsernameRegistered(username) {
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate delay
    return true;
}

// Validate password
function validatePassword(username, password) {
    // Is password alphanumeric safe
    if (!isAlphanumericSymbolSafe(password)) {
        return false;
    }
    // Is password registered
    if (!isPasswordRegistered(username, password)) {
        return false;
    }
    // Password is valid
    return true;
}

// Is alphanumeric symbol safe
function isAlphanumericSymbolSafe(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%._-])[a-zA-Z\d@#$%._-]{8,32}$/.test(password);
}

// Is password registered in the database
async function isPasswordRegistered(username, password) {
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate delay
    return true;
}

// Bind the form submit event to the validateForm function
$('#signInForm').submit(validateForm);