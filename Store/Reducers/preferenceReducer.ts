const initialState = {
    preferences: {
        food: false,
        drink: false,
        sightseeing: false,
        music: false
    }
}

export const changePreferences = (state = initialState, action) => {
    let nextState
    switch(action.type) {
        case 'CHANGE_PREFERENCES':
            nextState = {
                ...state,
                preferences: {

                }
            };
            return nextState || state;
        default:
            return state
    }
};