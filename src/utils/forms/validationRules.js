const validateRequired = value => {
  return value !== '';
};

const validateEmail = email => {
  const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return emailRegex.test(String(email).toLocaleLowerCase());
};

const validateMinLength = (value, ruleVal) => {
  return value.length >= ruleVal;
};

const validateMaxLength = (value, ruleVal) => {
  return value.length <= ruleVal;
};

const validateConfirmPass = (value, passValue) => {
  return value === passValue;
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
      case 'minLength':
        valid = valid && validateMinLength(value, rules[rule]);
        break;
      case 'maxLength':
        valid = valid && validateMaxLength(value, rules[rule]);
        break;
      case 'confirmPass':
        valid = valid && validateConfirmPass(value, form[rules.confirmPass].value);
        break;
      default:
        valid = true;
    }
  });

  return valid;
};

export default validation;
