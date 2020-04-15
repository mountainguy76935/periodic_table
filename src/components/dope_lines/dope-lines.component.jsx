import React from 'react';
import './dope-lines.styles.css'

export class DopeLines extends React.Component{
    render() {
    return (
        <React.Fragment>
            {this.props.hover ? 
                <React.Fragment> 
                    <div className='linesa active'></div> 
                    <div className='linesb active'></div>
                    <div className='linesc active'></div>
                </React.Fragment> : 
                <React.Fragment>
                    <div className='linesa'></div>
                    <div className='linesb'></div>
                    <div className='linesc'></div>
                </React.Fragment>
            }
        </React.Fragment>
        )
    }
}