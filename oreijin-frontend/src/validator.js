const validator = {
  /**
   * Checks if the email match the regex
   * @param {String} email
   * @return {boolean} true if it matches
   */
  checkEmail: (email) => {
    const regex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;
    // console.log(regex);
    return regex.test(email);
  },

  /**
   * Checks if the email match the regex
   * @param {File} image
   * @return {boolean} true if it matches
   */
  checkImageSize: (image) => image.size < 2000000,

  /**
   * Checks if the password match the regex
   * The password must contain at least 1 lower case, 1 upper case
   * 1 numeric character, one special character and must be 6 characters to 15
   * @param {String} password
   * @return {boolean} true if it matches
   */
  checkPassword: (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,15})/;
    // console.log(regex);
    if (password.includes(';') || password.includes('-') || password.includes('<') || password.includes('>')) return false;
    return regex.test(password);
  },

  /**
   * Checks if the verification password matches with the password entered by the user
   *
   * @param {String} paswword Password entered by the user
   * @param {String} verification Password to verify
   * @return {boolean}
   */
  verifyPassword: (password, verification) => {
    if (validator.checkPassword(password)) return password === verification;
    return false;
  },

  /**
   * Checks if the name match the regex
   *
   * @param {String} name
   * @return {boolean} true if it matches
   */
  checkName: (name) => {
    const regex = /^[a-zA-Z-¨^èéêëÉÈËäï ]{2,}$/;
    return regex.test(name);
  },

  /**
   * Get the maximum limit date for input
   * @param {String} date
   * @return {String} return the date computed
   */
  getMaxDateInput: () => {
    const today = new Date();
    const dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const mm = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const yyyy = today.getFullYear() - 18;

    return `${yyyy}-${mm}-${dd}`;
  },

  /**
   * Checks if the birth date is within the limit range
   * @param {String} birthdate
   * @return {boolean} true if is within the limit range
   */
  checkBirthDate: (birthdate) => birthdate < validator.getMaxDateInput(),

  /**
   * Checks if the name match the regex
   *
   * @param {String} address
   * @return {boolean} true if it matches
   */
  checkAddress: (address) => {
    // TODO : chercher une regex plus strict
    const regex = /^.{7,}$/;
    return regex.test(address);
  },

  /**
   * Check if the postal code match the regex
   *
   * @param {String} city
   * @return {boolean} true if it matches
   */
  checkCity: (city) => {
    const regex = /^[a-zA-Z-ÉéÏïèÈëÀà ]{1,}$/;

    return regex.test(city);
  },

  /**
   * Check if the postal code match the regex
   *
   * @param {String} postalCode
   * @return {boolean} true if it matches
   */
  checkPostalCode: (postalCode) => {
    const regex = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
    return regex.test(postalCode);
  },

  /**
   * Check if the service title matches the regex
   * The title must contain 10 to 70 characters
   * @param {String} title
   * @return {boolean} true if it matches
   */
  checkServiceTitle: (title) => {
    const regex = /^[a-zA-Z0-9-!?'.,ÉÈéèêÊàâÂÀôÔïîÏëçÇ ]{10,60}$/;

    return regex.test(title);
  },

  /**
   * Check if the service description matches the regex
   * The description must contains 50 to 280 characters
   * @param {String} description
   * @return {boolean} true if it matches
   */
  checkServiceDescription: (description) => {
    const regex = /^[a-zA-Z0-9-!?'.",+;:@_#&\/=éèàêÊâÀÂÏïîÎ$*¥€ôÔÉÈëË%çùÇÙ ]{50,280}$/m;

    return regex.test(description);
  },

  /**
   * Checks if the service category's id is included in the category list
   *
   * @param {Number} categoryId
   * @param {Array{Object}} categoryList An array of object
   * @return {boolean} true if the category exists in the list
   */
  checkServiceCategory: (categoryId, categoryList) => {
    if (categoryList.find((category) => categoryId === category.value)) return true;
    return false;
  },

  /**
   * Check if the service type is a boolean
   * @param {boolean} type
   * @return {boolean} true if it matches
   */
  checkServiceType: (value) => typeof value === 'boolean',

  /**
   * Check if the reply matches the regex
   * The reply must contains 140 characters max
   * @param {String} comment
   * @return {boolean} true if the comment matches the regex
   */
  checkReply: (value) => {
    const regex = /^[a-zA-Z0-9-!?'.()",+;:@_#&/=éèàêÊÏïôÔÉÈëË%çùÇÙ ]{1,140}$/m;

    return regex.test(value);
  },

  /**
   * Checks if the edit/add service form is valid
   *
   * @param {Object} form
   * @param {Array(Object)} array
   * @return {boolean}
   */
  checkServiceForm: (form, categoryList) => {
    const {
      title, serviceCategory, type, body, image,
    } = { ...form };

    if (!validator.checkServiceTitle(title)) return false;
    if (!validator.checkServiceCategory(serviceCategory, categoryList)) return false;
    if (!validator.checkServiceType(type)) return false;
    if (!validator.checkServiceDescription(body)) return false;
    if (image && !validator.checkImageSize(image)) return false;
    return true;
  },

  /**
   * Checks if the register form is valid
   *
   * @param {Object} form
   * @return {boolean}
   */
  checkRegisterForm: (form) => {
    const {
      firstname, lastname, birthdate, email,
      plainPassword, verificationPassword, address, city, postalcode,
    } = { ...form };

    if (!validator.checkName(firstname)) return false;
    if (!validator.checkName(lastname)) return false;
    if (!validator.checkBirthDate(birthdate)) return false;
    if (!validator.checkEmail(email)) return false;
    if (!validator.checkPassword(plainPassword)) return false;
    if (!validator.verifyPassword(plainPassword, verificationPassword)) return false;
    if (!validator.checkAddress(address)) return false;
    if (!validator.checkCity(city)) return false;
    if (!validator.checkPostalCode(postalcode)) return false;

    return true;
  },

  /**
   * Checks if the profile form is valid
   *
   * @param {Object} form
   * @return {boolean}
   */
  checkProfileForm: (form) => {
    const {
      firstName, lastName, address, city, postalCode,
    } = { ...form };

    if (!validator.checkName(firstName)) return false;
    if (!validator.checkName(lastName)) return false;
    if (!validator.checkAddress(address)) return false;
    if (!validator.checkCity(city)) return false;
    if (!validator.checkPostalCode(postalCode)) return false;

    return true;
  },
};

export default validator;
