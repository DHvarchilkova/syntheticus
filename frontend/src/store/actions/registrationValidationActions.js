import axios from 'axios'

export const validationDispatch = (data) => {
    return {
        type: 'register',
        payload: data
    }
}

export const errorValidationDispatch = (error) => {
    return {
        type: 'error',
        payload: error
    }
}

export const ValidationAction = validationSentData => (dispatch, getState) => {
    return axios.post('https://syntheticus.propulsion-learn.ch/backend/api/auth/validate', validationSentData)
        .then(response => {
            dispatch(validationDispatch(response.data))
            return response;
        }).catch(error => {
            dispatch(errorValidationDispatch(error))
        })
}
