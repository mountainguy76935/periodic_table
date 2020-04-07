import React from 'react';
import './dope-lines.styles.css'

export class DopeLines extends React.Component{
    render() {
    return (
        <React.Fragment>
            {this.props.hover ? 
            <div className='linesa active'></div> : 
            <div className='linesa'></div>
        }
            {this.props.hover ? 
            <div className='linesb active'></div> : 
            <div className='linesb'></div>
        }
            {this.props.hover ? 
            <div className='linesd active'></div> : 
            <div className='linesd'></div>
        }
        </React.Fragment>
        )
    }
}