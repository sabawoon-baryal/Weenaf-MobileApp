import { StackNavigator } from "react-navigation";

import { OptionsPage } from "../../containers/OptionsPage";
import { MainPage } from "../../containers/MainPage";
import Profile from "../../containers/Profile";
import UserStories from "../../containers/UserStories/UserStories";
import SelectedStory from "../../containers/UserStories/SelectedStory";

const routeConfig = {
  More: { screen: OptionsPage },
  Main: { screen: MainPage },
  Profile: { screen: Profile },
  UserStories: { screen: UserStories },
  SelectedStory: { screen: SelectedStory }
};
const navigatorConfig = { initialRouteName: "EmergencyRequest" };
export const MoreOptionsTab = StackNavigator(routeConfig, navigatorConfig);
