import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import { IInitialState } from '../redux/interfaces';
import { CircularProgress } from '@mui/material';
import GoogleMap from '../components/Map/GoogleMap';

const MapPage: React.FC = () => {
    const dispatch = useDispatch();
    const { loading, error, fireEvents} = useSelector((state: IInitialState) => {
        const { loading, error, fireEvents } = state;
        return {
            loading,
            error,
            fireEvents
        };
    });

    useEffect(() => {
        dispatch(fetchData());
    },[]);

    const renderer = (): JSX.Element | undefined => {
        if (loading) {
            return <CircularProgress/>
        } else if (!loading && error) {
            return (
                <div>Error</div>
            )
        } else if (!loading && fireEvents) {
            return <GoogleMap events={fireEvents}/>
        }
    }

    return (
        <div style={{ marginTop: '10px' }}>
            {renderer()}
        </div>
    )
};

export default MapPage
