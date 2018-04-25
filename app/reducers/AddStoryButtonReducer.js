import {
  addStoryButtonCondition,
  onAddStoryButtonPressed
} from "../actions/ActionTypes";

const defualtState = {
  disablePostBtn: true
};

export default function AddStoryButtonReducer(state = defualtState, action) {
  console.log("disable in reducer: ", action.disablePostBtn);
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
