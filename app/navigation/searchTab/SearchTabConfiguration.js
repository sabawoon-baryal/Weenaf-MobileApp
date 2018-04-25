import { StackNavigator } from "react-navigation";

import { SearchPage } from "../../containers/SearchPage";
import { SearchResultPage } from "../../containers/SearchResultPage";

const routeConfig = {
  Search: { screen: SearchPage },
  SearchResult: { screen: SearchResultPage }
};
const navigatorConfig = {};

export const SearchTab = StackNavigator(routeConfig, navigatorConfig);
