import React from 'react'
import NewAccount from "./NewAccount";
import {createUser} from "../../API/DBApi";

class NewAccountContainer extends React.Component {
    onCreatePress = async (userCreateInfo) => {
        //const responseServer = await createUser(userCreateInfo)
        //const parsedResponse = responseServer.data
        //if (parsedResponse.error === false){
            this.props.navigation.navigate("NewPreferences")
        //}
    }
    render() {
        return(
            <NewAccount
                userInfoFromLogin={this.props.navigation.state.params}
                onCreatePress={this.onCreatePress}
            />
        );
    }
}

export default NewAccountContainer