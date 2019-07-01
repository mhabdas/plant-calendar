const validateRequired = value => {
  return value !== '';
};

const validateEmail = email => {
  const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return emailRegex.test(String(email).toLocaleLowerCase());
};

const validation = (value, rules, form) => {
  let valid = true;

  Object.keys(rules).forEach(rule => {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        break;
      default:
        valid = true;
    }
  });

  return valid;
};

export default validation;
