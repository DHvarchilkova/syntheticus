import axios from 'axios';

export const generateDataRequest = () => {
  return {
    type: "request",
    payload: token
  };
};

export const generateDataError = () => {
  return {
    type: "error",
    payload: error
  };
};

export const generateDataSuccess = (payload) => {
  return {
    type: "success",
    payload: error
  };
};

export const generateDataAction = ({ email, password }) => (dispatch, getState) => {
  return axios.post('http://localhost:8000/backend/api/auth/token', { email, password})
  .then( response => {
      dispatch(generateDataRequest(response.data.access))
      localStorage.setItem('token', response.data.access)
      return response;
  }).catch(error => {
      dispatch(generateDataError(error))
  })
}
