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

const userLoginAction = ({ username, password }) => (dispatch, getState) => {
  return axios.post('https://syntheticus.propulsion-learn.ch/backend/api/auth/token/', { username, password})
  .then( response => {
      dispatch(userLoginDispatch(response.data.access))
      localStorage.setItem('token', response.data.access)
      return response;
  }).catch(error => {
      dispatch(userLoginError(error))
  })
}

export default userLoginAction;



