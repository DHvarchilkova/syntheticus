import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registrationReducer from './registrationReducer';
import registrationValidationReducer from './registrationValidationReducer';


const rootReducer = combineReducers({
	loginReducer,
	registrationReducer,
	registrationValidationReducer,
})

export default rootReducer
