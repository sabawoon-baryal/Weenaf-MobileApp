// Redux
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

import { Tabs } from "./navigation/TabNav/TabNavConfig";
import { TopLevelNavigator } from "./navigation/topLevelNavigator/TopNavConfiguration";
import { TabOneNavigator } from "./navigation/tabOne/TabOneConfiguration";
import { LocationTab } from "./navigation/locationTab/LocationTabConfiguration";
import { HomeTab } from "./navigation/homeTab/HomeTabConfiguration";
import { SearchTab } from "./navigation/searchTab/SearchTabConfiguration";
import { AlertsTab } from "./navigation/alertsTab/AlertsTabConfiguration";
import { MoreOptionsTab } from "./navigation/moreOptionsTab/MoreOptionsTabConfiguration";
import SignUpReducer from "./reducers/SignUpReducer";
import storiesReducer from "./reducers/storiesReducer";
import LoginReducer from "./reducers/LoginReducer";
import AddStoryButtonReducer from "./reducers/AddStoryButtonReducer";
import EditStoryReducer from "./reducers/EditStoryReducer";

// Middleware
const middleware = () => {
  return applyMiddleware(logger);
};

export default createStore(
  combineReducers({
    topNavigator: (state, action) =>
      TopLevelNavigator.router.getStateForAction(action, state),

    tab: (state, action) => Tabs.router.getStateForAction(action, state),
    tabOne: (state, action) =>
      TabOneNavigator.router.getStateForAction(action, state),

    locationTab: (state, action) =>
      LocationTab.router.getStateForAction(action, state),

    homeTab: (state, action) => HomeTab.router.getStateForAction(action, state),

    searchTab: (state, action) =>
      SearchTab.router.getStateForAction(action, state),

    alertsTab: (state, action) =>
      AlertsTab.router.getStateForAction(action, state),

    moreOptionsTab: (state, action) =>
      MoreOptionsTab.router.getStateForAction(action, state),

    SignUpReducer,
    storiesReducer,
    LoginReducer,
    AddStoryButtonReducer,
    EditStoryReducer
  }),
  middleware()
);
