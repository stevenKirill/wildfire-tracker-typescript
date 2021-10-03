import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.item}>
                <NavLink to="/map" activeClassName={classes.active}>Map</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/list" activeClassName={classes.active}>List</NavLink>
            </div>
        </div>
    );
};

export default Header
