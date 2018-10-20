import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import OptionsReducer from './reducer_options';

const rootReducer = combineReducers({
    options: OptionsReducer
});

export default rootReducer;