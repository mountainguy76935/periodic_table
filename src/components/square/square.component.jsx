import React from 'react';
import './square.styles.css'

import { DopeLines } from '../dope_lines/dope-lines.component';

export default class Square extends React.Component{
    constructor() {
        super();
        this.state = {
            hover: false,
            element: '',
        }
    }

    handleHover = () => {
        this.setState({
            hover: true
        })
    }

    handleOffHover = () => {
        this.setState({
            hover: false
        })
    }

    render() {

        return (
            <React.Fragment>
            <div
                onClick={() => this.props.handleClick(this.props.number)} 
                className = {
                    this.props.blur ?
                    'square blur' :
                    'square'
                }
                onMouseOver = {this.handleHover}
                onMouseOut={this.handleOffHover}
                style= {{
                        gridArea: this.props.area, 
                        backgroundColor: `${this.props.colorGroup}`}}
                >
                <p className="number">{this.props.number}</p>    
                <p className="symbol">
                    {this.props.symbols}
                </p>
                {this.state.element !== this.props.name ? 
                <DopeLines color={this.props.colorGroup} hover={this.state.hover}/> : 
                null} 
                </div>
            </React.Fragment>
        )
    }
}