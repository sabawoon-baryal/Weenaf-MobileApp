import {
  onChangeProfilePictureRequest,
  onChangeProfilePictureSuccess,
  onChangeProfilePictureFailure
} from "../actions/ActionTypes";

const defaultState = {
  changing: false,
  changed: false,
  profilePicture: null,
  error: null
};

export default function UpdateProfileReducer(state = defaultState, action) {
  switch (action.type) {
    case onChangeProfilePictureRequest:
      return {
        ...state,
        changing: true,
        changed: false
      };
    case onChangeProfilePictureSuccess:
      return {
        ...state,
        changing: false,
        changed: true,
        profilePicture: action.profilePicture,
        error: action.error
      };
    case onChangeProfilePictureFailure:
      return {
        ...state,
        changing: false,
        changed: false,
        error: action.error
      };
    default:
      return state;
  }
}
