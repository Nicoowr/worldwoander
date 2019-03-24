import * as React from 'react';
import MapView from "react-native-maps";
import {View, StyleSheet} from "react-native";
import {colors, drawerButton} from "../../../Resources/styles";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onBackPress: () => void;
}

class MapComponent extends React.Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />
        <View style={styles.drawerButton}>
          <Icon.Button
            name="chevron-left"
            backgroundColor={colors.secondary}
            onPress={() => this.props.onBackPress()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerButton
})

export default MapComponent;