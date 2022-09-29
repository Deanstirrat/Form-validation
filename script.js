const mail = document.getElementById("mail");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

mail.addEventListener("input", (event) => {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("Please enter a valid email address");
    mail.reportValidity();
  } else if (mail.validity.tooShort) {
    mail.setCustomValidity("Must be longer then 5 characters");
    mail.reportValidity();
  } else if (mail.validity.valueMissing) {
    mail.setCustomValidity("Email is required");
    mail.reportValidity();
  } else {
    mail.setCustomValidity("");
  }
});
mail.addEventListener("focusout", (event) => {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("Please enter a valid email address");
    mail.reportValidity();
  } else if (mail.validity.tooShort) {
    mail.setCustomValidity("Must be longer then 5 characters");
    mail.reportValidity();
  } else if (mail.validity.valueMissing) {
    mail.setCustomValidity("Email is required");
    mail.reportValidity();
  } else {
    mail.setCustomValidity("");
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("Please enter only letters");
    country.reportValidity();
  } else if (country.validity.valueMissing) {
    country.setCustomValidity("Country is required");
    country.reportValidity();
  } else {
    country.setCustomValidity("");
  }
});
country.addEventListener("focusout", (event) => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("Please enter only letters");
    country.reportValidity();
  } else if (country.validity.valueMissing) {
    country.setCustomValidity("Country is required");
    country.reportValidity();
  } else {
    country.setCustomValidity("");
  }
});

zip.addEventListener("input", (event) => {
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity(
      "Zip should be in the format of 'xxxxx' or 'xxxx-xxxx'"
    );
    zip.reportValidity();
  } else if (zip.validity.valueMissing) {
    zip.setCustomValidity("zip is required");
    zip.reportValidity();
  } else {
    zip.setCustomValidity("");
  }
});
zip.addEventListener("focusout", (event) => {
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity(
      "Zip should be in the format of 'xxxxx' or 'xxxx-xxxx'"
    );
    zip.reportValidity();
  } else if (zip.validity.valueMissing) {
    zip.setCustomValidity("zip is required");
    zip.reportValidity();
  } else {
    zip.setCustomValidity("");
  }
});
//validation functions:
function checkUppercase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toUpperCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}

function checkLowerCase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toLowerCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}

function containsNumber(str) {
  return /\d/.test(str);
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

password.addEventListener("input", (event) => {
  if (password.validity.patternMismatch) {
    if (!checkUppercase(password.value)) {
      password.setCustomValidity("at least 1 uppercase character required");
      password.reportValidity();
    } else if (!checkLowerCase(password.value)) {
      password.setCustomValidity("at least 1 lowercase character required");
    } else if (!containsNumber(password.value)) {
      password.setCustomValidity("at least 1 number required");
      password.reportValidity();
    } else if (!containsSpecialChars(password.value)) {
      password.setCustomValidity("at least 1 special character required");
      password.reportValidity();
    } else if (!containsSpecialChars(password.value.length < 8)) {
      password.setCustomValidity("must be at least 8 characters long");
      password.reportValidity();
    } else {
      password.setCustomValidity("");
    }
  } else if (password.validity.valueMissing) {
    password.setCustomValidity("password is required");
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});
password.addEventListener("focusout", (event) => {
  if (password.validity.patternMismatch) {
    if (!checkUppercase(password.value)) {
      password.setCustomValidity("at least 1 uppercase character required");
      password.reportValidity();
    } else if (!checkLowerCase(password.value)) {
      password.setCustomValidity("at least 1 lowercase character required");
    } else if (!containsNumber(password.value)) {
      password.setCustomValidity("at least 1 number required");
      password.reportValidity();
    } else if (!containsSpecialChars(password.value)) {
      password.setCustomValidity("at least 1 special character required");
      password.reportValidity();
    } else if (!containsSpecialChars(password.value.length < 8)) {
      password.setCustomValidity("must be at least 8 characters long");
      password.reportValidity();
    } else {
      password.setCustomValidity("");
    }
  } else if (password.validity.valueMissing) {
    password.setCustomValidity("password is required");
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});

confirmPassword.addEventListener("input", (event) => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("passwords must match");
    confirmPassword.reportValidity();
  } else if (confirmPassword.validity.valueMissing) {
    confirmPassword.setCustomValidity("confirmation password is required");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
});
confirmPassword.addEventListener("focusout", (event) => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("passwords must match");
    confirmPassword.reportValidity();
  } else if (confirmPassword.validity.valueMissing) {
    confirmPassword.setCustomValidity("confirmation password is required");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
});
