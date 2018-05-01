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
  onAddStoryButtonPressed,
  onEditStoryRequest,
  onEditStorySuccess,
  onEditStoryFailure,
  onChangeProfilePictureRequest,
  onChangeProfilePictureSuccess,
  onChangeProfilePictureFailure
} from "./ActionTypes";
import RNFetchBlob from "react-native-fetch-blob";
import { EDIT_USER } from "../links/URLs";

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

// edit story

export const editStoryRequest = (id, text, image, imageHeight) => {
  return {
    type: onEditStoryRequest,
    storyID: id,
    storyText: text,
    storyImage: image,
    storyImageHeight: imageHeight,
    editingStory: true,
    edited: false
  };
};

export const editStorySuccess = (id, text, image) => {
  return {
    type: onEditStorySuccess,
    storyID: id,
    storyText: text,
    storyImage: image,
    editingStory: false,
    edited: true,
    error: null
  };
};

export const editStoryFailure = error => {
  return {
    type: onEditStoryFailure,
    error: error,
    editingStory: false,
    edited: false
  };
};

// change profile picture

// change profile async action
export const changeProfile = profilePicture => {
  console.log("executed: ", profilePicture);
  return dispatch => {
    dispatch(changeProfileRequest());
    RNFetchBlob.fetch(
      "PATCH",
      `http://172.30.10.42:8000/api/users/12`,
      {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        "Content-Type": "multipart/form-data"
      },
      [
        {
          name: "image",
          filename: profilePicture.fileName,
          type: profilePicture.type,
          data: RNFetchBlob.wrap(profilePicture.path)
        }
      ]
    )
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw response;
        }
        return null;
      })
      .then(responseJson => {
        console.log("result of profile change: ", responseJson);
        dispatch(changeProfileSuccess(responseJson));
      })
      .catch(err => {
        console.log("Profile change Error: ", err);
        dispatch(changeProfileFailure(err));
      });
  };
};

const changeProfileRequest = () => {
  console.log("request");
  return {
    type: onChangeProfilePictureRequest,
    changing: true,
    changed: false
  };
};

const changeProfileSuccess = profilePicture => {
  console.log("success");
  return {
    type: onChangeProfilePictureSuccess,
    changing: false,
    changed: true,
    profilePicture,
    error: null
  };
};

const changeProfileFailure = error => {
  console.log("failure");
  return {
    type: onChangeProfilePictureFailure,
    changing: false,
    changed: false,
    error
  };
};
