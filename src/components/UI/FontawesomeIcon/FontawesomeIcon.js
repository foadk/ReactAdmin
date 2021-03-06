import React from 'react';

import './FontawesomeIcon.css';

const fontawesomeIcon = (props) => (
    <i className={"fa fa-" + props.icon + " " + props.classes}
        onClick={props.iconClicked}
        title={props.title} >
    </i>
);

export default fontawesomeIcon;