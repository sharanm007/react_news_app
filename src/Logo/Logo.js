import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classes from './Logo.css'

const logo = () => {
    return(
        <div><FontAwesomeIcon className={classes.Logo} icon="newspaper"/></div>
    )
}

export default logo