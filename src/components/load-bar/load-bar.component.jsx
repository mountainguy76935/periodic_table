import React from 'react';
import './load-bar.styles.css'

export const LoadBar = (props) => {
    return (
        <React.Fragment>
            <div className="loadbar" style={{
                width: `${props.loadNum}px`
            }}>
                Loading!
            </div>
        </React.Fragment>
    )
}