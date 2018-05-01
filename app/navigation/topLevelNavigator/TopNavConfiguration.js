import { StackNavigator } from "react-navigation";

import LoginPage from "../../containers/LoginPage";
import { Tabs } from "../TabNav/TabNavConfig";
import { SignUpPage } from "../../containers/SignUpPage";
import { ForgotPasswordPage } from "../../containers/ForgotPasswordPage";
import SignUpContact from "../../containers/SignUpContact";
import SignUpName from "../../containers/SignUpName";
import SignUpPassword from "../../containers/SignUpPassword";
// import { SignUpGender } from "../../containers/SignUpGender";
import SignUpBloodType from "../../containers/SignUpBloodType";
import SignUpBirthday from "../../containers/SignUpBirthday";
import SignUpFinal from "../../containers/SignUpFinal";

const routeConfig = {
  Login: { screen: LoginPage },
  SignUp: { screen: SignUpPage },
  SignUpContact: { screen: SignUpContact },
  TabNavigation: { screen: Tabs },
  ForgotPassword: { screen: ForgotPasswordPage },
  SignUpName: { screen: SignUpName },
  SignUpPassword: { screen: SignUpPassword },
  // SignUpGender: { screen: SignUpGender },
  SignUpBloodType: { screen: SignUpBloodType },
  SignUpBirthday: { screen: SignUpBirthday },
  SignUpFinal: { screen: SignUpFinal }
};
const navigatorConfig = {
  initialRouteName: "TabNavigation",
  headerMode: "none",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "red"
    }
  }
};

export const TopLevelNavigator = StackNavigator(routeConfig, navigatorConfig);
