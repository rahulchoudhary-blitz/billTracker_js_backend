//check the require fields 
const checkRequiredFields = (lable, amount) => {
  if (!lable || !amount.length < 1) {
    return true;
  }
  return false;
};
//check the lable fields
const checkNameLength = (lable) => {
  if (lable.length > 20) {
    return true;
  }
  return false;
};
module.exports = {
  checkNameLength,
  checkRequiredFields,
};
