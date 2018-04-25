import {
  setUserContact,
  setUserName,
  setUserPassword,
  signUpRequest,
  signUpSuccess,
  signUpFailure
} from "../actions/ActionTypes";

const initialState = {
  signedUp: false,
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
  isSigningUp: false,
  signedUp: false,
  error: null
};

export default function SignUpReducer(state = initialState, action) {
  switch (action.type) {
    case setUserContact:
      return {
        ...state,
        email: action.email
      };
    case setUserName:
      return {
        ...state,
        name: action.name
      };
    case setUserPassword:
      return {
        ...state,
        password: action.password,
        confirmPassword: action.confirmPassword
      };
    case signUpRequest:
      return {
        ...state,
        isSigningUp: action.isSigningUp,
        signedUp: action.signedUp
      };
    case signUpSuccess:
      return {
        ...state,
        isSigningUp: action.isSigningUp,
        signedUp: action.signedUp,
        error: action.error
      };
    case signUpFailure:
      return {
        ...state,
        isSigningUp: action.isSigningUp,
        signedUp: action.signedUp,
        error: action.error
      };
    default:
      return state;
  }
}
