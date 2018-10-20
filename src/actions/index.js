export const DELETE_OPTION = 'delete_option';
export const ADD_OPTION = 'add_option';
export const EDIT_OPTION = 'edit_option';


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