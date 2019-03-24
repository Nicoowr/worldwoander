import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import {colors, drawerButton, mainContainer} from "../../../Resources/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from "react-native-elements";
import {Poi} from "../../../Resources/Interfaces";
import SingleDiscovery from "./SingleDiscovery";

interface Props {
  userPois: Poi[]
  onDrawerIconPress: () => void
  isLoading: boolean
}

class MyDiscoveries extends React.Component<Props> {
  _displayLoading() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Card title="My Discoveries">
          <FlatList
            style={styles.list}
            keyExtractor={(item) => item.id_poi}
            data={this.props.userPois}
            renderItem={({item}) => <SingleDiscovery key={item.id_poi} userPoi={item}/>}/>
        </Card>
        <View style={styles.drawerButton}>
          <Icon.Button
            name="bars"
            backgroundColor={colors.secondary}
            onPress={() => this.props.onDrawerIconPress()}
          />
        </View>
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    mainContainer,
    drawerButton,
    list: {
      flex: 1,
      width: 300
    },
    loadingContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)

export default MyDiscoveries;