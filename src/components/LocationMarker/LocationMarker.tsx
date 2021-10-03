import React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import classes from './locationmarker.module.css';
import Tooltip from '@mui/material/Tooltip';

interface IProps {
    lat: number;
    lng: number;
    title: string;
}

const LocationMarker: React.FC<IProps> = ({ lat, lng, title }) => {
    return (
        <div className={classes.marker}>
            <Tooltip title={title}>
                <LocalFireDepartmentIcon color="error"/>
            </Tooltip>
        </div>
    )
}

export default LocationMarker
