import { StackNavigator } from "react-navigation";

import { MapPage } from "../../containers/MapPage";

const routeConfig = {
  Map: { screen: MapPage }
};
const navigatorConfig = {};

export const LocationTab = StackNavigator(routeConfig, navigatorConfig);
