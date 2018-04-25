import { StackNavigator } from "react-navigation";

import { OptionsPage } from "../../containers/OptionsPage";
import { MainPage } from "../../containers/MainPage";

const routeConfig = {
  More: { screen: OptionsPage },
  Main: { screen: MainPage }
};
const navigatorConfig = {};
export const MoreOptionsTab = StackNavigator(routeConfig, navigatorConfig);
