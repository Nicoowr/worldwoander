import * as React from 'react';
import MapComponent from "./MapComponent";

interface Props {
  navigation: any;
}

class MapContainer extends React.Component<Props> {
  onBackPress = () => this.props.navigation.navigate('HomeScreen')

  render() {
    return (
      <MapComponent
        onBackPress={this.onBackPress}
      />
    );
  }
}

export default MapContainer;