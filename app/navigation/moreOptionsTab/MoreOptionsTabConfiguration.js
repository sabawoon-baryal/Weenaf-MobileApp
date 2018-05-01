import { StackNavigator } from "react-navigation";

import { OptionsPage } from "../../containers/OptionsPage";
import { MainPage } from "../../containers/MainPage";
import Profile from "../../containers/Profile";
import { UserStories } from "../../containers/UserStories/UserStories";

const routeConfig = {
  More: { screen: OptionsPage },
  Main: { screen: MainPage },
  Profile: { screen: Profile },
  UserStories: { screen: UserStories }
};
const navigatorConfig = { initialRouteName: "Profile" };
export const MoreOptionsTab = StackNavigator(routeConfig, navigatorConfig);
