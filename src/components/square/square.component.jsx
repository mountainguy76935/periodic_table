import React from 'react';
import './square.styles.css';

import { DopeLines } from '../dope_lines/dope-lines.component';

export const Square = (props) => {
    const [hover, setHover] = React.useState(false)

    return (
        <React.Fragment>
            <div
                onClick={() => props.handleClick(parseInt(props.number))} 
                className = {
                    props.fadeOut ?
                    'square fadeOut' :
                    'square'
                }
                onMouseOver = {() => setHover(true)}
                onMouseOutCapture={() => setHover(false)}
                style= {{
                        gridArea: props.area, 
                        backgroundColor: `${props.colorGroup}`}}
            >
                <p className="number">{props.number}</p>    
                <p className="symbol">{props.symbols}</p>
                <DopeLines color={props.colorGroup} hover={hover}/>
            </div>
        </React.Fragment>
    )
}