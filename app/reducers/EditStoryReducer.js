import {
  onEditStoryRequest,
  onEditStorySuccess,
  onEditStoryFailure
} from "../actions/ActionTypes";

const defaultState = {
  id: null,
  text: "",
  image: null,
  error: null,
  edited: false,
  editingStory: false
};

export default function EditStoryReducer(state = defaultState, action) {
  switch (action.type) {
    case onEditStoryRequest:
      return {
        ...state,
        storyID: action.storyID,
        storyText: action.storyText,
        storyImage: action.storyImage,
        storyImageHeight: action.storyImageHeight,
        editingStory: action.editingStory,
        edited: action.edited
      };

    case onEditStorySuccess:
      return {
        ...state,
        storyID: action.storyID,
        storyText: action.storyText,
        storyImage: action.storyImage,
        editingStory: action.editingStory,
        edited: action.edited,
        error: action.error
      };

    case onEditStoryFailure:
      return {
        ...state,
        editingStory: action.editingStory,
        edited: action.edited,
        error: action.error
      };
    default:
      return state;
  }
}
