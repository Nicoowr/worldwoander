import * as React from 'react';
import {Poi} from "../../../Resources/Interfaces";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";

interface Props {
  userPoi: Poi
}

class SingleDiscovery extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity
        style={styles.discoveryContainer}
        onPress={() => {}}
      >
        <Image
          style={styles.image}
          source={{uri: this.props.userPoi.imageLink}}
        />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>{this.props.userPoi.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText} numberOfLines={6}>{this.props.userPoi.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create(
  {
    discoveryContainer: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
    },
    contentContainer: {
      flex: 1,
      margin: 5
    },
    headerContainer: {
      flex: 3,
      flexDirection: 'row'
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    descriptionContainer: {
      flex: 7
    },
    descriptionText: {
      fontStyle: 'italic',
      color: '#666666'
    },
  }
)

export default SingleDiscovery;