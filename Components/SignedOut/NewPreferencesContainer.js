import React from 'react'
import {connect} from 'react-redux'
import NewPreferences from './NewPreferences'
import {createUserPreferences} from "../../API/DBApi";

class NewPreferencesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            preferences: {
                food: this.props.preferences.food,
                drink: this.props.preferences.drink,
                sightseeing: this.props.preferences.sightseeing,
                music: this.props.preferences.music,
                party: this.props.preferences.party,
            },
        }
    }

    onIconPress = (id) => {
        switch (id) {
            case 'food':
                this.setState({
                    preferences: {
                        ...this.state.preferences,
                        food: !this.state.preferences.food
                    }
                })
                break;
            case 'drink':
                this.setState({
                    preferences: {
                        ...this.state.preferences,
                        drink: !this.state.preferences.drink
                    }
                })
                break;
            case 'sightseeing':
                this.setState({
                    preferences: {
                        ...this.state.preferences,
                        sightseeing: !this.state.preferences.sightseeing
                    }
                })
                break;
            case 'music':
                this.setState({
                    preferences: {
                        ...this.state.preferences,
                        music: !this.state.preferences.music
                    }
                })
                break;
            case 'party':
                this.setState({
                    preferences: {
                        ...this.state.preferences,
                        party: !this.state.preferences.party
                    }
                })
                break;
            default:
                return
        }
    };

    setPreferences = async () => {
        const newPreferences = {
            food: this.state.preferences.food,
            drink: this.state.preferences.drink,
            sightseeing: this.state.preferences.sightseeing,
            music: this.state.preferences.music,
            party: this.state.preferences.party
        }
        const action = {
            type: 'CHANGE_PREFERENCES',
            value: {
                food: this.state.preferences.food,
                drink: this.state.preferences.drink,
                sightseeing: this.state.preferences.sightseeing,
                music: this.state.preferences.music,
                party: this.state.preferences.party
            }};
        this.props.dispatch(action);

        //await createUserPreferences({email: this.props.userMail, preferences: newPreferences});
        await this.props.navigation.navigate("SignedIn")
    };

    render() {
        console.log("Props: ", this.state)
        return(
            <NewPreferences
                preferences={this.state.preferences}
                onIconPress={this.onIconPress}
                onSubmitPress={this.setPreferences}
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

export default connect(mapStateToProps)(NewPreferencesContainer)