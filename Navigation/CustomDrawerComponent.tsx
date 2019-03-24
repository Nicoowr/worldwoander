import * as React from 'react';
import {SafeAreaView, ScrollView, View, Image, StyleSheet} from "react-native";
import {DrawerItems, DrawerItemsProps} from "react-navigation";
import {colors} from "../Resources/styles";

class CustomDrawerComponent extends React.Component<DrawerItemsProps> {
  render() {
    return (
      <SafeAreaView style={styles.drawerMainContainer}>
        <View style={styles.drawerHeaderContainer}>
          <Image
            source={require('../Images/compass.png')}
            style={styles.drawerHeaderIcon}
          />
        </View>
        <ScrollView>
          <DrawerItems {...this.props}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create(
  {
    drawerMainContainer: {
      flex: 1,
      backgroundColor: colors.secondary
    },
    drawerHeaderContainer: {
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerHeaderIcon: {
      height: 120,
      width: 120,
      borderRadius: 60
    }
  }
)

export default CustomDrawerComponent;