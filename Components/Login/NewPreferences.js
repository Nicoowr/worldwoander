import React from 'react'
import {StyleSheet, TouchableOpacity, View, Image, Text} from "react-native";
import ToggleButton from '../Generic/ToggleButton'
import {images} from '../../Images/ImagesPath'

class NewPreferences extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.newPreferencesContainer}>
                    <View style={styles.itemRow}>
                        <ToggleButton
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.food.uri}
                            value={this.props.preferences.food}
                            onIconPress={this.props.onIconPress}
                            name="food"
                        />
                        <ToggleButton
                            name="drink"
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.drink.uri}
                            value={this.props.preferences.drink}
                            onIconPress={this.props.onIconPress}
                        />
                    </View>
                    <View style={styles.itemRow}>
                        <ToggleButton
                            name="sightseeing"
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.sightseeing.uri}
                            value={this.props.preferences.sightseeing}
                            onIconPress={this.props.onIconPress}
                        />
                        <ToggleButton
                            name="music"
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.music.uri}
                            value={this.props.preferences.music}
                            onIconPress={this.props.onIconPress}
                        />
                    </View>
                    <View style={styles.itemRow}>
                        <ToggleButton
                            name="party"
                            buttonStyle={styles.pictureContainer}
                            pictureStyle={styles.picture}
                            source={images.party.uri}
                            value={this.props.preferences.party}
                            onIconPress={this.props.onIconPress}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.onSubmitPress}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            backgroundColor: '#ff790a',
            alignItems: 'center',
            justifyContent: 'center',
        },
        newPreferencesContainer: {
            padding: 10,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
        },
        formikNewPreferences: {
            flex: 0,
        },
        itemRow: {
            flexDirection: 'row'
        },
        pictureContainer: {
            margin: 10,
            backgroundColor: '#ff230d',
            borderRadius: 20,
        },
        picture: {
            height: 64,
            width: 64,
            margin: 20,
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
    }
);

export default NewPreferences