import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ToggleButton from "./Generic/ToggleButton";
import {images} from "../Images/ImagesPath";
import {Preferences, TravelPreferences} from "../Resources/Interfaces";
import {connect, DispatchProp} from "react-redux";
import {HomeScreenContainerProps} from "./HomeScreenContainer";

interface HomeScreenProps {
    onIconPress: any
}

class HomeScreen extends React.Component<HomeScreenProps & HomeScreenContainerProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.homeContainer}>
                    <Text style={styles.text}>I want to travel ...</Text>
                    <View style={styles.itemRow}>
                        <ToggleButton
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.user.uri}
                            value={this.props.travelPreferences ? this.props.travelPreferences.travelAlone : false}
                            onIconPress={this.props.onIconPress}
                            name="travelAlone"
                        />
                        <ToggleButton
                            name="travelWithPeople"
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.multiUsers.uri}
                            value={this.props.travelPreferences ? this.props.travelPreferences.travelWithPeople : false}
                            onIconPress={this.props.onIconPress}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text>Go!</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ff790a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: "center"
    },
    itemRow: {
        flexDirection: 'row'
    },
    picture: {
        height: 64,
        width: 64,
        margin: 20,
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    },
    button: {
        height: 50,
        margin: 20,
        padding: 5,
        backgroundColor: '#ff230d',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default HomeScreen