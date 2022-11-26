import React from "react";

import classes from './MainCart.module.css';


const MainCart = props => {
    return <div className={classes.card}>{props.children}</div>
};


export default MainCart;