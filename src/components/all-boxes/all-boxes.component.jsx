import React from 'react';
import Square from '../square/square.component'
import { DisplayBox } from '../display-box/display-box.component';
import { ExtraElements } from '../extra-elements/extra-elements.component'; 
import { siftTop } from '../../functions/siftTop';
import { siftMid } from '../../functions/siftMid';
import { siftExtra } from '../../functions/siftExtra';
import './all-boxes.styles.css';

export class AllBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clickedElem: 0,
            clicked: false,
            colorGroup: {
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
            },
            disabled: false
        }
    }

    handleClickOff = (e) => {
        this.setState({
            clickedElem: 0,
            disabled: false
        })
    }

    handleClick = (val) => {
        return this.state.disabled ? 
        null :
        this.setState({
            clickedElem: parseInt(val),
            disabled: true
        })
    }

    handleBoxClick = () => {
        return this.state.disabled ?
        null : 
        this.setState({
            clicked: !this.state.clicked,
            disabled: true
        })
    }

    render() {
        const areaList = this.state.clicked? 
        this.props.number.map(a => {
            return ((a>57 && a<72) || (a>89 && a<104)) ? 
            siftExtra(parseInt(a)) : 
            null
        }) :
        this.props.number.map(a => {
            return a < 19 ? 
            siftTop(parseInt(a)) : 
            siftMid(parseInt(a))
        })
        const clickedElem = this.state.clickedElem;
        return (
            <React.Fragment>
                {this.props.number.map(a =>
                    areaList[a-1] ? 
                    <React.Fragment>
                    <Square
                        handleClick = {this.handleClick}
                        number ={a}
                        symbols={this.props.symbol[a-1]} 
                        name = {this.props.name[a-1]} 
                        area={areaList[a-1]}
                        colorGroup={this.state.colorGroup[this.props.group[a-1]]}
                        blur={this.state.clickedElem ? true : false}
                        />
                    </React.Fragment> : 
                    null
                    )}
                        <DisplayBox 
                            number ={clickedElem} 
                            handleClickOff = {this.handleClickOff}
                            name = {this.props.name[clickedElem-1]} 
                            color={this.props.color[clickedElem-1]} 
                            symbols={this.props.symbol[clickedElem-1]} 
                            mass ={this.props.mass[clickedElem-1]}
                            colorGroup={this.state.colorGroup[this.props.group[clickedElem-1]]}
                            group = {this.props.group[clickedElem-1]}
                            active = {this.state.clickedElem ? true : false}
                        /> 
                        {this.state.clickedElem ? <div className="layer"></div> : null}
                        <ExtraElements 
                            blur={this.state.clickedElem ? true : false}
                            handleClick={this.handleBoxClick}
                            clicked={this.state.clicked}
                        />
            </React.Fragment>
        )
    }
}