import { CLICKED_ELEM } from './constants';
import { UNCLICKED_ELEM } from './constants';
import { CLICKED_BOOL } from './constants';
import { DISABLED } from './constants';

const initialState={
    clickedElem: 0,
    clicked: false,
    disabled: false
}

export default function ClickedElemReducer(state=initialState, action={}) {
    let newClicked = !state.clicked;
    let newDisabled = !state.disabled;
    switch(action.type) {
        case CLICKED_ELEM:
            return {...state, clickedElem: action.payload}
        case UNCLICKED_ELEM:
            return {...state, clickedElem: 0}
        case CLICKED_BOOL:
            return {...state, clicked: newClicked}
        case DISABLED:
            return {...state, disabled: newDisabled}
        default:
            return state
    }
}