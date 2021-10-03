import React from 'react';
import { useSelector } from 'react-redux';
import { IInitialState } from '../redux/interfaces';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import classes from '../common.module.css';

const ListPage = () => {
    const {  fireEvents} = useSelector((state: IInitialState) => {
        const { fireEvents } = state;
        return {
            fireEvents
        };
    });
    return (
        <List>
            {fireEvents.map(fire => {
                return (
                    <>
                    <ListItem>
                        <LocalFireDepartmentIcon color="error" className={classes.marginRight}/>
                        <ListItemText>{fire.title}</ListItemText>
                    </ListItem>
                    <Divider/>
                    </>
                )
            })}
        </List>
    )
}

export default ListPage
