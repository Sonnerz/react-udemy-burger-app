import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    // MY ATTEMPT SOLO
    // <div className={classes.drawerToggle}>
    //     <button
    //         className={classes.Menu}
    //         onClick={props.clicked}>
    //         MENU
    // </button>
    // </div>
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);


export default drawerToggle;






