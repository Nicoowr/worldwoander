import * as React from "react";
import {Image, View, StyleSheet, Switch} from 'react-native'
import {ToggleButtonInterface} from "../../Resources/Interfaces";

class ToggleButton extends React.Component<ToggleButtonInterface> {
    constructor(props: ToggleButtonInterface){
        super(props)
    }
    render() {
        return(
            <View style={styles.toggleContainer}>
                <Image
                    style={this.props.pictureStyle}
                    source={this.props.source}
                />
                <Switch
                    onValueChange={() => this.props.onIconPress(this.props.name)}
                    value={this.props.value}
                    />
            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        toggleContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ff230d',
            borderRadius: 5,
            margin: 5,
            paddingBottom: 10
        }
    }
)

export default ToggleButton