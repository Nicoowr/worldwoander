import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from "./HomeScreen";
import {connect, DispatchProp} from "react-redux";
import {Preferences, TravelPreferences} from "../Resources/Interfaces";

export interface HomeScreenContainerProps {
    preferences: Preferences
    travelPreferences: TravelPreferences
    userMail: string
}

class HomeScreenContainer extends React.Component<HomeScreenContainerProps & DispatchProp> {
    constructor(props) {
        super(props)
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

    render() {
        return(
            <HomeScreen
                preferences={this.props.preferences}
                travelPreferences={this.props.travelPreferences}
                userMail={this.props.userMail}
                onIconPress={this.onIconPress}
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