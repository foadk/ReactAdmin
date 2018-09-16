import React from 'react';
import Button from '../Button/Button';

import './Dialog.css';

const dialog = (props) => (
    // <div>
        <div className="card" style={{width: '100%'}} >
            <div className="card-header">
                <div>{props.children}</div>
            </div>
            {props.buttons.map(button => (
                <Button
                    btnType={button.type}
                    clicked={button.click}>
                    {button.title}
                </Button>
            ))}
        </div>
    // </div>
);

export default dialog;