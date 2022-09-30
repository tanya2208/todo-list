import React from "react";
import classNames from 'classnames'

import './Badge.scss'

const Badge = ({ color, onClick, className }) => {
    return(
        <i style={{background : color}} className={classNames('badge', className)} onClick={onClick}></i>
    )
}

export default Badge