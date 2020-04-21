import axios from 'axios';

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

export const userLoginAction = ({ email, password }) => (dispatch, getState) => {
  return axios.post('http://localhost:8000/backend/api/auth/token', { email, password})
  .then( response => {
      dispatch(userLoginDispatch(response.data.access))
      localStorage.setItem('token', response.data.access)
      return response;
  }).catch(error => {
      dispatch(userLoginError(error))
  })
}






