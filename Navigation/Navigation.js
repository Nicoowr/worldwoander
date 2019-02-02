import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import LoginScreen from "../Components/Login/LoginScreen";
import LoginContainer from "../Components/Login/LoginContainer";
import HomeScreen from "../Components/HomeScreen";
import NewAccountContainer from "../Components/Login/NewAccountContainer";
import NewPreferencesContainer from "../Components/Login/NewPreferencesContainer";
import HomeScreenContainer from "../Components/HomeScreenContainer";

const MainNavigator = createStackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions: {
            title: 'Login',
        }
    },
    NewAccount: {
        screen: NewAccountContainer,
        navigationOptions: {
            title: 'New account'
        }
    },
    NewPreferences: {
        screen: NewPreferencesContainer,
        navigationOptions: {
            title: 'Set preferences'
        }
    },
    Home: {
        screen: HomeScreenContainer,
        navigationOptions: {
            title: 'Home',
            headerLeft: null
        }
    }
})

export default createAppContainer(MainNavigator)