import {
  passSelectedUserStoryRequest,
  passSelectedUserStorySuccess,
  passSelectedUserStoryFailure
} from "../actions/ActionTypes";

const defaultState = {
  passing: false,
  passed: false,
  story: null,
  error: null
};

export default function PassSelectedUserStory(state = defaultState, action) {
  switch (action.type) {
    case passSelectedUserStoryRequest:
      return {
        ...state,
        passing: action.passing,
        passed: action.passed,
        story: action.story
      };

    case passSelectedUserStorySuccess:
      return {
        ...state,
        passing: action.passing,
        passed: action.passed,
        story: action.story,
        error: action.error
      };
    case passSelectedUserStoryFailure:
      return {
        ...state,
        passing: action.passing,
        passed: action.passed,
        error: action.error
      };
    default:
      return state;
  }
}
