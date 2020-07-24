import iteduAPI from "../../API/iteduAPI";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = (dispatch) => (username, password) => {
    iteduAPI.post('/user/login', {
        email: username,
        password: password
    })
        .then((response => {

            if (response.status === 200) {
                dispatch({type: LOGIN_SUCCESS, data: response.data})
            }
            else {
                dispatch({type: LOGIN_FAILED, error: response.error})
            }
        }))
        .catch((error) => {
            dispatch({type: LOGIN_ERROR});

        })
}




