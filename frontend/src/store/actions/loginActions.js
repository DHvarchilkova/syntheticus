import Axios from '../../axios';

export const userLoginDispatch = token => {
    return {
        type: "login",
        payload: token
    };
};

export const userLoginError = error => {
    return {
        type: "error",
        payload: error
    };
};

export const userLoginAction = ({email, password}) => (dispatch, getState) => {
    return Axios.post('auth/token', {email, password})
        .then(response => {
            dispatch(userLoginDispatch(response.data.access))
            localStorage.setItem('token', response.data.access)
            localStorage.setItem('username', response.data.user.username)
            localStorage.setItem('email', response.data.user.email)
            console.log('me.username: ' + localStorage.getItem('username'))
            console.log('me.email: ' + localStorage.getItem('email'))
            return response
        }).catch(error => {
            dispatch(userLoginError(error))
        })
}






