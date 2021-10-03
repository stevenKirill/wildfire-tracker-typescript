import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAPS_KEY } from '../../api/keys'
import { IEvent } from '../../interfaces/appInterfaces';
import LocationMarker from '../LocationMarker/LocationMarker';
import LocationInfo from '../LocationInfo/LocationInfo';

interface IProps {
    center?: {
        lat: 40.730610,
        lng: -73.935242
    },
    zoom?: 6,
    events: IEvent[]
};

interface IInfo {
    id: string;
    title: string;
}

const NATURAL_EVENT_WILDFIRE: number = 8;

const GoogleMap: React.FC<IProps> = ({ center, zoom, events = [] }) => {
    const [info,setInfo] = useState<IInfo | null>(null);

    console.log(info,'=>> info')

    const renderMarkers = events.map((ev,idx) => {
        const { categories } = ev;
        if(categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return (
                <LocationMarker 
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                    key={idx}
                    onClick={() => setInfo({ id: ev.id, title: ev.title})}
                />
            )
        };
    });
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {renderMarkers}
            </GoogleMapReact>
            {info && <LocationInfo/>}
        </div>
    );
};

GoogleMap.defaultProps = {
    center: {
        lat: 40.730610,
        lng: -73.935242
    },
    zoom: 6
}

export default GoogleMap;
