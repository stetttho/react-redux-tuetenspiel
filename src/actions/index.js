export const DELETE_OPTION = 'delete_option';
export const ADD_OPTION = 'add_option';
export const EDIT_OPTION = 'edit_option';
export const UPDATE_OPTION = 'update_option';
export const START_GAME = 'start_game';

export function deleteOption(values) {
    return {
        type: DELETE_OPTION,
        payload: values 
    };
}

export function addOption(values) {
    return {
        type: ADD_OPTION,
        payload: values      
    };
}

export function editOption(values) {
    return {
        type: EDIT_OPTION,
        payload: values       
    };
}

export function updateOption(values) {
    return {
        type: UPDATE_OPTION,
        payload: values       
    };
}

export function startGame(values) {
    return {
        type: START_GAME,
        payload: values
    };
}