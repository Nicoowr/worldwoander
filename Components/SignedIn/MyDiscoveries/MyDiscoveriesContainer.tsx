import * as React from 'react';
import MyDiscoveries from "./MyDiscoveries";
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {getUserPois} from "../../../API/DBApi";
import {Poi} from "../../../Resources/Interfaces";
import {ActivityIndicator, View} from "react-native";

interface Props {
  userId: string,
  navigation: any,
}

interface State {
  userPois : Poi[];
  isLoading: boolean
}

class MyDiscoveriesContainer extends React.Component<Props, State> {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="star" style={{fontSize: 24, color: tintColor}}/>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      userPois: [],
      isLoading: false
    }
  }

  async componentDidMount(): Promise<void> {
    this.setState({isLoading: true})
    const responseServer = await getUserPois({userId: this.props.userId})
    const pois = responseServer.data.pois as Poi[]
    console.log("My discoveries: ", JSON.stringify(responseServer.data, null, 2))
    this.setState({
      userPois: pois,
      isLoading: false
    })
  }



  onDrawerIconPress = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    if (this.state.userPois.length === 0) {
      return null;
    }
    console.log("Discoveries state: ", JSON.stringify(this.state, null, 2))
    return (
      <MyDiscoveries
        onDrawerIconPress={this.onDrawerIconPress}
        userPois={this.state.userPois}
        isLoading={this.state.isLoading}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    preferences: state.preferences,
    travelPreferences: state.preferences,
    userMail: state.userMail,
    userId: state.userId,
  }
};

export default connect(mapStateToProps)(MyDiscoveriesContainer);