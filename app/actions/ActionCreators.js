import {
  setUserContact,
  setUserName,
  setUserPassword,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  fetchStories,
  fetchStoriesSuccess,
  fetchStoriesFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  addStoryButtonCondition,
  onAddStoryButtonPressed
} from "./ActionTypes";

// user registration

// ////////////////////////////////////////////
export const userContact = email => {
  return {
    type: setUserContact,
    email
  };
};

export const userName = name => {
  return {
    type: setUserName,
    name
  };
};

export const userPassword = (password, confirmPassword) => {
  return {
    type: setUserPassword,
    password,
    confirmPassword
  };
};

// sign up request, success, failure

export const requestSignUp = () => {
  return {
    type: signUpRequest,
    isSigningUp: true,
    signedUp: false
  };
};

export const successSignUp = () => {
  return {
    type: signUpSuccess,
    isSigningUp: false,
    signedUp: true,
    error: null
  };
};

export const failureSignUp = error => {
  return {
    type: signUpFailure,
    isSigningUp: false,
    signedUp: false,
    error: error
  };
};

// login

// ////////////////////////////////////////////////////////////

export const requestLogin = () => {
  return {
    type: loginRequest,
    isLoggingIn: true,
    loggedIn: false
  };
};
export const successLogin = (
  id,
  first_name,
  last_name,
  email,
  image,
  birthday,
  address,
  province,
  district,
  blood
) => {
  return {
    type: loginSuccess,
    isLoggingIn: false,
    loggedIn: true,
    email: email,
    first_name: first_name,
    last_name: last_name,
    id: id,
    image: image,
    birthday: birthday,
    address: address,
    province: province,
    district: district,
    blood: blood,
    error: null
  };
};
export const failureLogin = () => {
  return {
    type: loginFailure,
    isLoggingIn: false,
    loggedIn: false,
    error: "Email or Password is incorrect"
  };
};

// stories

// /////////////////////////////////////////

export const fetchRequestStories = () => {
  return {
    type: fetchStories,
    loading: true
  };
};

export const fetchSuccessStories = stories => {
  return {
    type: fetchStoriesSuccess,
    loading: false,
    myStories: stories,
    error: null
  };
};

export const fetchFailureStories = () => {
  return {
    type: fetchStoriesFailure,
    loading: false,
    error: "Failed loading stories"
  };
};

// add story button condition

export const addStoryButton = disable => {
  console.log("disable in actin creator: ", disable);
  return {
    type: addStoryButtonCondition,
    disablePostBtn: disable
  };
};

export const addStoryButtonPressed = pressed => {
  return {
    type: onAddStoryButtonPressed,
    pressed: pressed
  };
};
