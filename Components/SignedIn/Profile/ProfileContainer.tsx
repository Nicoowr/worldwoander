import * as React from 'react';
import Profile from "./Profile";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: any;
}

class ProfileContainer extends React.Component<Props> {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="user" style={{fontSize: 24, color: tintColor}}/>
    )
  }
  onDrawerIconPress = () => {
    this.props.navigation.openDrawer();
  }

  onSignOutPress = () => {
    this.props.navigation.navigate('SignedOut')
  }
  render() {
    return (
      <Profile
        onDrawerIconPress={this.onDrawerIconPress}
        onSignOutPress={this.onSignOutPress}
      />
    );
  }
}

export default ProfileContainer;