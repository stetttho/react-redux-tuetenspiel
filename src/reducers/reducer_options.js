import _ from 'lodash';
import { DELETE_OPTION, ADD_OPTION, EDIT_OPTION, UPDATE_OPTION } from '../actions';

export default function(state = {}, action) {

    switch(action.type) {
        
        case DELETE_OPTION:
            return {
                ...state,
                list: state.list.filter((option)=>option.id !== action.payload)
            };

        case ADD_OPTION:
            return {
                ...state,
                list: state.list.concat({id: new Date(), title:action.payload})
            };
            
        case EDIT_OPTION:
            return {
                ...state,
                list: state.list.map((option) => option.id === action.payload ? { ...option, editing: !option.editing } : option)
            };
        
        case UPDATE_OPTION:
            return {
                ...state,
                list: state.list.map((option) => {
                    if (option.id === action.payload.id) {
                        return {
                            ...option,
                            title: action.payload.input,
                            editing: !option.editing
                        }
                    } else return option;
                })
            }
            
        default: return state;
    }
}