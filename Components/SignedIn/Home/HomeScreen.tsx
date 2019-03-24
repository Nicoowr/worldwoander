import * as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import ToggleButton from "../../Generic/ToggleButton";
import {images} from "../../../Images/ImagesPath";
import {Preferences, TravelPreferences} from "../../../Resources/Interfaces";
import {connect, DispatchProp} from "react-redux";
import {HomeScreenContainerProps} from "./HomeScreenContainer";
import {Button, Card} from 'react-native-elements';
import {colors, drawerButton, mainContainer} from "../../../Resources/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

interface HomeScreenProps {
  onIconPress: () => void;
  onGoPress: () => void;
  onDrawerIconPress: () => void;
}

class HomeScreen extends React.Component<HomeScreenProps & HomeScreenContainerProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style={styles.mainContainer}>
        <View style={styles.drawerButton}>
          <Icon.Button
            name="bars"
            backgroundColor={colors.secondary}
            onPress={() => this.props.onDrawerIconPress()}
          />
        </View>
        <Card>
          <Text style={styles.text}>I want to travel ...</Text>
          <View style={styles.itemRow}>
            <ToggleButton
              pictureStyle={styles.picture}
              source={images.user.uri}
              value={this.props.travelPreferences ? this.props.travelPreferences.travelAlone : false}
              onIconPress={this.props.onIconPress}
              name="travelAlone"
            />
            <ToggleButton
              name="travelWithPeople"
              pictureStyle={styles.picture}
              source={images.multiUsers.uri}
              value={this.props.travelPreferences ? this.props.travelPreferences.travelWithPeople : false}
              onIconPress={this.props.onIconPress}
            />
          </View>
          <Button
            title="Go!"
            backgroundColor={colors.secondary}
            style={styles.button}
            onPress={() => this.props.onGoPress()}
          />

        </Card>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer,
  drawerButton,
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
    marginTop: 20,
  },
})

export default HomeScreen