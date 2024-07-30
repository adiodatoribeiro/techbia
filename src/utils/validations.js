export function validateEmail(email) {
  if (!email.includes("@")) {
    return false;
  }

  if (!email.includes(".com") && !email.includes(".com.br")) {
    return false;
  }

  if (email.includes("@.")) {
    return false;
  }

  if (email[0] === "@" || email[0] === ".") {
    return false;
  }

  return true;
}

const EXISTING_DDDs_BR = [
  '85', '88', '83','84', '11', '91', '92', '93', '94', '95', '96','97', '98', '99',
]

export function validatePhoneNumber(phoneNumber) {
  const twoFirstDigits = phoneNumber.slice(0, 2);

  const validDDD = EXISTING_DDDs_BR.includes(twoFirstDigits);

  if (phoneNumber.length !== 11) {
    return false;
  }

  if (!validDDD) {
    return false;
  }

  if (phoneNumber[2] !== '9') {
    return false;
  }

  if (phoneNumber.match(/[a-z]/i)) {
    return false;
  }

  return true;
}