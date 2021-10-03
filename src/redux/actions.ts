import { IEvent } from "../interfaces/appInterfaces";
import { Action } from "./interfaces";

const START_LOADING = (): Action<void> => {
    return {
        type: 'START_LOADING'
    }
}

function ERROR(): Action<void> {
    return {
        type: 'ERROR'
    }
}

// const ERROR = <IActionCreator>() => {
//     return {
//         type: 'ERROR'
//     }
// }

export const SAVE_DATA = (payload: IEvent[]): Action<IEvent[]> => {
    return {
        type: 'SAVE_DATA',
        payload
    }
}

export const fetchData = () => {
    return async (dispatch: any) => {
        dispatch(START_LOADING());
        try {
            const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
            const data = await res.json();
            console.log(data,'=>> data');
            const { events } = data;
            dispatch(SAVE_DATA(events));
        } catch (error) {
            dispatch(ERROR());
        }
    }
}