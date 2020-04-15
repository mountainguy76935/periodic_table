import { CLICKED_ELEM } from './constants';
import { UNCLICKED_ELEM } from './constants';
import { CLICKED_BOOL } from './constants';
import { DISABLED } from './constants';


export const ElemClicked = value => ({
        type: CLICKED_ELEM,
        payload: value
    })

export const ElemUnclicked = () => ({
        type: UNCLICKED_ELEM
})

export const ClickedBool = () => ({
    type: CLICKED_BOOL
})

export const Disabled = () => ({
    type: DISABLED
})