import React from 'react';
import './display-box.styles.css';

export const DisplayBox = (props) => {
    React.useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      });

    const handleClick = (e) => {
        e.preventDefault();
        if (node.current.contains(e.target)) {
          return; 
          } else {
            props.handleClickOff() 
          }
        };

    const node = React.useRef(null)
        return (
            <React.Fragment>
                <div 
                    ref={node}
                    style={{
                      backgroundColor: `${
                        props.colorGroup ? 
                        props.colorGroup : 
                        'FFFFFF'}`
                    }}
                    className={props.active ? 
                      "display-box active" :
                      "display-box" 
                    }
                >
                  <div className='sizing'>
                    <h1>{
                      props.number>0 ? 
                      props.number : 
                      ''}
                    </h1>
                    <h1>{props.symbols}</h1>
                    <h1>{props.name}</h1>
                    <h3>{props.mass}</h3>
                    <p>{props.group}</p>
                    <p>{props.active ? 
                      `year discovered: ${props.yearDiscovered}` : 
                      null}
                    </p>
                  </div>
                </div>
            </React.Fragment>
        )
}