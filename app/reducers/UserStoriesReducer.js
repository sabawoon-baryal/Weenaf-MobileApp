import {
  getUserStoriesRequest,
  getUserStoriesSuccess,
  getUserStoriesFailure
} from "../actions/ActionTypes";

const defaultState = {
  fetching: false,
  fetched: false,
  error: null,
  stories: null
};

export default function UserStoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case getUserStoriesRequest:
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    case getUserStoriesSuccess:
      return {
        ...state,
        fetching: false,
        fetched: true,
        stories: action.stories,
        error: action.error
      };
    case getUserStoriesFailure:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    default:
      return state;
  }
}
