import * as React from 'react';
import {View, StyleSheet} from "react-native"
import {Button, Card} from "react-native-elements";
import {colors, drawerButton, mainContainer} from "../../../Resources/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onSignOutPress: () => void
  onDrawerIconPress: () => void
}

class Profile extends React.Component<Props> {


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
        <Card title="Profile">
          <Button
            backgroundColor="#ff230d"
            title={"SIGN OUT"}
            onPress={() => this.props.onSignOutPress()}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    mainContainer,
    drawerButton,
  }
)

export default Profile;

