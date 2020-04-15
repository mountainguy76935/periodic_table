import React from 'react';
import './extra-elements.styles.css'

export const ExtraElements = (props) => {
    const [hover, setHover] = React.useState(false)
    
    return(
        <div 
            className={
                props.fadeOut && props.clicked ?
                'extra active fadeOut' :
                hover || props.clicked ? 
                "extra active" : 
                props.fadeOut ? 
                "extra fadeOut" : 
                "extra"
            }
            onClick={props.handleClick}
            onMouseOver = {() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
        </div>
    )
}