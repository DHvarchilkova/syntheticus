import axios from 'axios';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = user => {
	return ({
		type: SET_CURRENT_USER,
		payload: user
	})
}

export const getCurrentUser = () => async (dispatch) => {
	try {
		const response = await axios.get('me/');
		console.log("RECEIVED CURRENT USER RESPONSE:", response);

		const user = response.data
		if (user) {
			dispatch(setCurrentUser(user));
		}
		return response
	} catch (e) {
		return e
	}
};
