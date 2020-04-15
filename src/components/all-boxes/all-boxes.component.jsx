import React from 'react';
import { connect } from 'react-redux';

import { Square } from '../square/square.component'
import { ElemClicked, ElemUnclicked, Disabled } from '../../redux-files/actions'
import { DisplayBox } from '../display-box/display-box.component';
import { ExtraElements } from '../extra-elements/extra-elements.component'; 
import { siftTop, siftMid, siftExtra } from '../../functions/sift';
import './all-boxes.styles.css';

const mapStateToProps = (state) => ({
    clickedElem: state.ClickedReducer.clickedElem,
    diabled: state.DisabledReducer.disabled
})

const mapDispatchToProps = (dispatch) => {
    return {
        submitElemClicked: (value) => dispatch(ElemClicked(value)),
        submitElemUnclicked: () => dispatch(ElemUnclicked()),
        submitDisabled: () => dispatch(Disabled())
    }
}

export const AllBox = (props) => {
    const [clicked, setClicked] = React.useState(false)
    const colorGroup= {
                'nonmetal': '#dbc0a6',
                'alkali metal': '#364541',
                'metalloid': '#516b4e',
                'metal': '#a3b4c4',
                'halogen': '#9fa898',
                'lanthanoid': '#3a5f4a',
                'actinide': '#756c5d',
                'alkaline earth metal': '#688754',
                'noble gas': '#8ca566',
                'actinoid': '#9eae70',
                'transition metal': '#a1bc77',
                'post-transition metal': '#b0b47b'
            }

    const handleClickOff = () => {
        props.submitElemUnclicked()
        props.submitDisabled()
    }

    const handleClick = (val) => {
        if (props.disabled) {
            return null
        } else {
            props.submitElemClicked(val)
            props.submitDisabled()
        }
    }

    const handleBoxClick = () => {
        if (props.disabled) {
            return null
        } else {
            setClicked(!clicked)
            props.submitDisabled()
        }
    }

        const areaList = clicked ? 
        props.number.map(a => {
            return ((a>57 && a<72) || (a>89 && a<104)) ? 
            siftExtra(parseInt(a)) : 
            null
        }) :
        props.number.map(a => {
            return a < 19 ? 
            siftTop(parseInt(a)) : 
            siftMid(parseInt(a))
        })

        const clickedElem = props.clickedElem;
        
        return (
            <React.Fragment>
                {props.number.map(a =>
                    areaList[a-1] ? 
                    <React.Fragment>
                    <Square
                        handleClick = {handleClick}
                        number ={a}
                        symbols={props.symbol[a-1]} 
                        name = {props.name[a-1]} 
                        area={areaList[a-1]}
                        colorGroup={colorGroup[props.group[a-1]]}
                        fadeOut={clickedElem ? true : false}
                        />
                    </React.Fragment> : 
                    null
                    )}
                        <DisplayBox 
                            number ={clickedElem} 
                            handleClickOff = {handleClickOff}
                            name = {props.name[clickedElem-1]} 
                            color={props.color[clickedElem-1]} 
                            symbols={props.symbol[clickedElem-1]} 
                            mass ={props.mass[clickedElem-1]}
                            colorGroup={colorGroup[props.group[clickedElem-1]]}
                            group = {props.group[clickedElem-1]}
                            yearDiscovered = {props.yearDiscovered[clickedElem-1]}
                            active = {clickedElem ? true : false}
                        /> 
                        {clickedElem ? <div className="layer"></div> : null}
                        <ExtraElements 
                            fadeOut={clickedElem ? true : false}
                            handleClick={handleBoxClick}
                            clicked={clicked}
                        />
            </React.Fragment>
        )
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBox)