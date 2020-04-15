import { 
    CLICKED_ELEM, 
    UNCLICKED_ELEM,
    DISABLED,
    REQUEST_ELEMENTS_PENDING,
    REQUEST_ELEMENTS_SUCCESS,
    REQUEST_ELEMENTS_FAILED,
    REQUEST_ALL_SUCCESS
 } from './constants';

const initialStateElements={
    clickedElem: 0
}

export const ClickedReducer = (state=initialStateElements, action={}) => {
    switch(action.type) {
        case CLICKED_ELEM:
            return {...state, clickedElem: action.payload}
        case UNCLICKED_ELEM:
            return {...state, clickedElem: 0}
        default:
            return state
    }
}

const initialStateDisabled = {
    disabled: false
}

export const DisabledReducer = (state=initialStateDisabled, action={}) => {
    let newDisabled = !state.disabled;
    switch(action.type) {
        case DISABLED:
            return {...state, disabled: newDisabled}
        default:
            return state
    }
}

const initialStateAsync = {
    isPending: false,
    elements: [],
    error: null,
    allSuccess: false
}

export const AsyncReducer = (state=initialStateAsync, action={}) => {
    let otherElements = {...state.elements}
    switch (action.type) {
        case REQUEST_ELEMENTS_PENDING:
            return {...state, isPending: true}
        case REQUEST_ELEMENTS_SUCCESS:
            return Object.assign({}, state, {elements: {...otherElements, [action.payload['atomicNumber']]: action.payload}})
        case REQUEST_ELEMENTS_FAILED:
            return {...state, isPending: false, error: action.payload }
        case REQUEST_ALL_SUCCESS:
            return {...state, isPending: false, allSuccess: true }
        default: 
            return state
    }
}