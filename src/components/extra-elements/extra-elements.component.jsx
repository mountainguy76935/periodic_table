import React from 'react';
import './extra-elements.styles.css'

export class ExtraElements extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            hover: false
        }
    }
    
    handleHover = () => {
        this.setState({
            hover: true
        })
    }

    handleExit = () => {
        this.setState({
            hover: false
        })
    }
    render() {
        return(
            <div 
            className={
                this.state.hover || this.props.clicked ? 
                "extra active" : 
                this.props.blur ? 
                "extra blur" :
                "extra"
            }
            onClick={this.props.handleClick}
            onMouseOver = {this.handleHover}
            onMouseOut={this.handleExit}
            >
            </div>
        )
    }
}