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

export interface Poi {
    id_poi: string,
    title: string,
    type: string,
    latitude: string,
    longitude: string,
    country: string,
    description: string,
    imageLink: string,
    timeStart: string
}
