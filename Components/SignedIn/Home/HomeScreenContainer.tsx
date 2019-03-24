import * as React from 'react'
import HomeScreen from "./HomeScreen";
import {connect, DispatchProp} from "react-redux";
import {Preferences, TravelPreferences} from "../../../Resources/Interfaces";
import Icon from 'react-native-vector-icons/FontAwesome';

export interface HomeScreenContainerProps {
    preferences: Preferences
    travelPreferences: TravelPreferences
    userMail: string
    navigation: any;
}

class HomeScreenContainer extends React.Component<HomeScreenContainerProps & DispatchProp> {
    onDrawerIconPress = () => {
        this.props.navigation.openDrawer();
    }

    onIconPress = (id) => {
        let action;
        switch (id) {
            case 'travelAlone':
                action = {
                    type: 'CHANGE_TRAVEL_PREFERENCES',
                    value: {
                        travelAlone: true
                    }};
                break;
            case 'travelWithPeople':
                action = {
                    type: 'CHANGE_TRAVEL_PREFERENCES',
                    value: {
                        travelWithPeople: true
                    }};
                break;
            default:
                return
        }
        this.props.dispatch(action)
    };

    onGoPress = () => {
        this.props.navigation.navigate('Map')
    }

    render() {
        return(
            <HomeScreen
                preferences={this.props.preferences}
                travelPreferences={this.props.travelPreferences}
                userMail={this.props.userMail}
                onIconPress={this.onIconPress}
                onGoPress={this.onGoPress}
                onDrawerIconPress={this.onDrawerIconPress}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        preferences: state.preferences,
        travelPreferences: state.preferences,
        userMail: state.userMail,
    }
};

export default connect(mapStateToProps)(HomeScreenContainer)