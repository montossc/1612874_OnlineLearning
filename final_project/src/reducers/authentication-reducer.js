import {LOGIN_ERROR, LOGIN_FAILED, LOGIN_SUCCESS} from "../core/services/authentication-service";


export const authenReducer = (prevState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo}
        case LOGIN_FAILED:
            return {...prevState, isAuthenticated: false, message: action.error.message}
        case LOGIN_ERROR:
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error();

    }
}
