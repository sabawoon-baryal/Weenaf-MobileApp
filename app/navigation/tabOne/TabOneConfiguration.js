import { StackNavigator } from "react-navigation";

import { MapPage } from "../../containers/MapPage";
import { SearchPage } from "../../containers/SearchPage";

const routeConfig = {
  ScreenOne: { screen: MapPage }
  // ScreenTwo: { screen: SearchPage }
};

const navigationConfig = {};

export const TabOneNavigator = StackNavigator(routeConfig, navigationConfig);
