import { 
    CLICKED_ELEM, 
    UNCLICKED_ELEM,
    DISABLED,
    REQUEST_ELEMENTS_PENDING,
    REQUEST_ELEMENTS_SUCCESS,
    REQUEST_ELEMENTS_FAILED,
    REQUEST_ALL_SUCCESS
 } from './constants';


export const ElemClicked = value => ({
        type: CLICKED_ELEM,
        payload: value
    })

export const ElemUnclicked = () => ({
        type: UNCLICKED_ELEM
})

export const Disabled = () => ({
    type: DISABLED
})

export const RequestElements = (dispatch) => {
    dispatch({type: REQUEST_ELEMENTS_PENDING});
    const arr = new Array(118).fill(118).map((a,i) => a-i).reverse();
    let requests = arr
        .map(val => {
            return fetch(`https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${val}`)
                .then(resp => resp.json())
                .then(data => {
                    return dispatch({
                    type: REQUEST_ELEMENTS_SUCCESS,
                    payload: data
                })
            })
                .catch(error => dispatch({
                    type: REQUEST_ELEMENTS_FAILED,
                    payload: error
                }))
            })
    Promise.all(requests)
        .then(() => dispatch({
            type: REQUEST_ALL_SUCCESS
        }))
        .catch(reject => console.log(reject))
}