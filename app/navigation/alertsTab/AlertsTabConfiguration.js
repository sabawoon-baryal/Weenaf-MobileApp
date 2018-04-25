import { StackNavigator } from "react-navigation";

import { NotificationsPage } from "../../containers/NotificationsPage";

const routeConfig = {
  Notification: { screen: NotificationsPage }
};
const navigatorConfig = {};
export const AlertsTab = StackNavigator(routeConfig, navigatorConfig);
