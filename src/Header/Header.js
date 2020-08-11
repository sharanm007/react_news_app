import React from 'react'
import classes from './Header.css'
import {Link} from 'react-router-dom'
const header = () => {
    return(
        <div className={classes.HeaderWrapper}>
            <p>NEWS API</p>
            <ul className={classes.MenuItems}>
                <li><Link className={classes.link} to="/" >Home</Link></li>
                <li><Link className={classes.link} to="/health">covid</Link></li>
            </ul>
        </div>
    )
}

export default header