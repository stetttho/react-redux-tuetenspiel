import { DELETE_OPTION, ADD_OPTION, EDIT_OPTION } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_OPTION:
            return state;
        case ADD_OPTION:

            return state;
        case EDIT_OPTION:
            return state;

        default: return state;


    }
}