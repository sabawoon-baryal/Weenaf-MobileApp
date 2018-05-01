import {
  addStoryButtonCondition,
  onAddStoryButtonPressed
} from "../actions/ActionTypes";

const defualtState = {
  disablePostBtn: true
};

export default function AddStoryButtonReducer(state = defualtState, action) {
  switch (action.type) {
    case addStoryButtonCondition:
      return {
        ...state,
        disablePostBtn: action.disablePostBtn
      };
    case onAddStoryButtonPressed:
      return {
        ...state,
        onPressPostBtn: action.pressed
      };
    default:
      return state;
  }
}
