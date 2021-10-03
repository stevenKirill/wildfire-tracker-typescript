import React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import classes from './locationmarker.module.css';

interface IProps {
    lat: number;
    lng: number;
    onClick: () => void
}

const LocationMarker: React.FC<IProps> = ({ lat, lng, onClick }) => {
    return (
        <div onClick={onClick} className={classes.marker}>
            <LocalFireDepartmentIcon color="error"/>
        </div>
    )
}

export default LocationMarker
