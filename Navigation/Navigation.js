import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import {
  createStackNavigator,
  createSwitchNavigator, createDrawerNavigator, DrawerItems
} from 'react-navigation'
import LoginContainer from "../Components/SignedOut/LoginContainer";
import NewAccountContainer from "../Components/SignedOut/NewAccountContainer";
import NewPreferencesContainer from "../Components/SignedOut/NewPreferencesContainer";
import HomeScreenContainer from "../Components/SignedIn/Home/HomeScreenContainer";
import Icon from 'react-native-vector-icons/FontAwesome'
import {StatusBar, Platform, SafeAreaView, ScrollView, Dimensions} from "react-native";
import ProfileContainer from "../Components/SignedIn/Profile/ProfileContainer";
import MapContainer from "../Components/SignedIn/Map/MapContainer";
import MyDiscoveriesContainer from "../Components/SignedIn/MyDiscoveries/MyDiscoveriesContainer";
import CustomDrawerComponent from "./CustomDrawerComponent";
import {colors} from "../Resources/styles";

const headerStyle = {
  //marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  headerVisible: false,
};

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: LoginContainer,
    headerMode: 'none',
    navigationOptions: {
      title: "Sign In",
      header: null,
    }
  },
  SignUp: {
    screen: NewAccountContainer,
    navigationOptions: {
      title: 'New account',
      header: null,
    }
  },
  NewPreferences: {
    screen: NewPreferencesContainer,
    navigationOptions: {
      title: 'Set preferences',
      header: null,
    },
  }
})

export const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreenContainer,
    navigationOptions: {
      header: null,
    }
  },
  Map: {
    screen: MapContainer,
    navigationOptions: {
      header: null,
    }
  },
},
)


export const SignedIn = createDrawerNavigator({
    Home: HomeNavigator,
    MyDiscoveries: MyDiscoveriesContainer,
    Profile: ProfileContainer
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: colors.tertiary,
    }
  }
)


export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  )
}
