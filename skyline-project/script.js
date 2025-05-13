function validateUsername(username) {
    return username.length >= 5 && /\d/.test(username);
}

function validatePassword(password) {
    const lengthValid = password.length >= 8;
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberCountValid = (password.match(/\d/g) || []).length >= 2;
    return lengthValid && specialCharValid && numberCountValid;
}

module.exports = { validateUsername, validatePassword };
