import axios from "axios"

const ROOT_URL = "https://travelquest.000webhostapp.com/v1/API.php?apicall="

export const getUser = async (userLoginInfo) => {
    const data = new FormData()
    data.append('mail', userLoginInfo.email)
    data.append('password', userLoginInfo.password)
    data.append('login_type', 'basic')

    const response = await axios.post(
        ROOT_URL + "userexists",
        data
    );
    return response
};

export const createUser = async (userCreateInfo) => {
    const data = new FormData()
    data.append('mail', userCreateInfo.email);
    data.append('password', userCreateInfo.password);
    data.append('first_name', userCreateInfo.firstName);
    data.append('last_name', userCreateInfo.lastName);
    data.append('gender', userCreateInfo.gender);
    data.append('account_type', 'basic');

    const response = await axios.post(
        ROOT_URL + "createuser",
        data
    );
    return response
}

export const createUserPreferences = async (userCreateInfo) => {
    const data = new FormData()
    data.append('user_mail', userCreateInfo.email);
    data.append('food', userCreateInfo.preferences.food);
    data.append('drink', userCreateInfo.preferences.drink);
    data.append('sightseeing', userCreateInfo.preferences.sightseeing);
    data.append('music', userCreateInfo.preferences.music);
    data.append('party', userCreateInfo.preferences.party);

    const response = await axios.post(
        ROOT_URL + "createuserpreferences",
        data
    );
    return response
}

// private static final String ROOT_URL = "https://travelquest.000webhostapp.com/v1/API.php?apicall=";
//
// public static final String URL_CREATE_USER = ROOT_URL + "createuser";
// public static final String URL_USER_EXISTS = ROOT_URL + "userexists";
// public static final String URL_READ_USERS = ROOT_URL + "getusers";
// public static final String URL_DELETE_HERO = ROOT_URL + "deletehero&id=";
//
// public static final String URL_CREATE_USER_PREFERENCES = ROOT_URL + "createuserpreferences";
// public static final String URL_UPDATE_USER_PREFERENCES = ROOT_URL + "updateuserpreferences";
// public static final String URL_UPDATE_USER_INFORMATION = ROOT_URL + "updateuserinformation";
//
// public static final String URL_GET_POIS = ROOT_URL + "getpois";
// public static final String URL_GET_USER_POIS = ROOT_URL + "getuserpois";
// public static final String URL_ADD_USER_POI = ROOT_URL + "adduserpoi";
// public static final String POST = "post";
// public static final String GET = "get";
