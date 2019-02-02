export interface Action {
    type: string,
    value: any,
}

export interface UserInterface {
    email: string,
    firstName: string,
    preferences: Preferences
}

export interface Preferences {
    food: boolean,
    drink: boolean,
    sightseeing: boolean,
    music: boolean,
    party: boolean
}

export interface TravelPreferences {
    travelAlone: boolean,
    travelWithPeople: boolean
}

export interface ToggleButtonInterface {
    onIconPress: any
    buttonStyle: object,
    pictureStyle: object,
    source: string,
    value: boolean
    name: string,
}
