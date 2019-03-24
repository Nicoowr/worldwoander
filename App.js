import React from 'react';
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import Navigation, {createRootNavigator} from "./Navigation/Navigation";
import {createAppContainer} from "react-navigation";

export default class App extends React.Component {
  state = {
    signedIn: false,
  }

  render() {
    const {signedIn} = this.state;

    const MainLayout = createAppContainer(createRootNavigator(signedIn))
    return (
        <Provider store={Store}>
            <MainLayout/>
        </Provider>
    );
  }
}

