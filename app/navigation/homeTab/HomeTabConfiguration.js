import { StackNavigator } from "react-navigation";

import UserStoriesPage from "../../containers/UserStoriesPage";
import { MainPage } from "../../containers/MainPage";
import AddStoryPage from "../../containers/AddStoryPage";
import AddStoryHeaderButton from "../../containers/AddStoryHeaderButton";

const routeConfig = {
  UserStories: { screen: UserStoriesPage },
  Main: { screen: MainPage },
  AddStory: {
    screen: AddStoryPage,
    navigationOptions: {
      title: "Update Story",
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white"
    }
  },
  AddStoryHeader: { screen: AddStoryHeaderButton }
};

const navigatorConfig = {
  initialRouteName: "UserStories"
};

export const HomeTab = StackNavigator(routeConfig, navigatorConfig);
