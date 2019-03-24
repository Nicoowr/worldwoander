const initialState = {
    userMail: "",
    userId: "",
    preferences: {
        food: false,
        drink: false,
        sightseeing: false,
        music: false,
        party: false,
    },
    travelPreferences: {
        travelAlone: false,
        travelWithPeople: false,
    }
}

export const updateUserState = (state = initialState, action) => {
    let nextState
    switch(action.type) {
        case 'USER_LOGGED_IN':
            console.log("user logged in ")
            console.log(action.value)
            nextState = {
                ...state,
                userMail: action.value,
                userId: action.userId,
            };
            console.log("next state: ", nextState)
            return nextState || state;
        case 'CHANGE_PREFERENCES':
            nextState = {
                ...state,
                preferences: action.value
            };
            return nextState || state;
        case 'CHANGE_TRAVEL_PREFERENCES':
            nextState = {
                ...state,
                travelPreferences: action.value
            };
            return nextState || state;
        default:
            return state
    }
};