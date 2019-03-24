import React from "react"
import LoginScreen from "./LoginScreen";
import {getUser} from "../../API/DBApi";
import {connect} from "react-redux"


class LoginContainer extends React.Component {
  onLoginPress = async (userLoginInfo) => {
    const responseServer = await getUser(userLoginInfo)
    const parsedResponse = responseServer.data
    console.log("User response: ", JSON.stringify(parsedResponse, null, 2))
    const action = {
      type: 'USER_LOGGED_IN',
      value: userLoginInfo.email,
      userId: parsedResponse.user_info[0].id_user
    };
    this.props.dispatch(action)
    if (parsedResponse.user_info.length === 1) {
      this.props.navigation.navigate("SignedIn")
    } else {
      this.props.navigation.navigate("NewAccount", {email: userLoginInfo.email, password: userLoginInfo.password})
    }
  };

  render() {
    return (
      <LoginScreen
        onLoginPress={this.onLoginPress}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    preferences: state.preferences,
    userMail: state.userMail,
  }
};

export default connect(mapStateToProps)(LoginContainer)