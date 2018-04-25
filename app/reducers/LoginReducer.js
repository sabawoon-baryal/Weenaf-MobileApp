import {
  loginRequest,
  loginSuccess,
  loginFailure
} from "../actions/ActionTypes";

const defaultState = {
  isLoggedIn: false
};

export default function LoginReducer(state = defaultState, action) {
  switch (action.type) {
    case loginRequest:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
        loggedIn: action.loggedIn
      };
    case loginSuccess:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
        loggedIn: action.loggedIn,
        userEmail: action.email,
        userID: action.id,
        userFirstName: action.first_name,
        userLastName: action.last_name,
        userBirthday: action.birthday,
        userAddress: action.address,
        userProvince: action.province,
        userDistrict: action.district,
        userBloodType: action.blood,
        userImage: action.image,
        error: action.error
      };
    case loginFailure:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
        loggedIn: action.loggedIn,
        error: action.error
      };
    default:
      return state;
  }
}
