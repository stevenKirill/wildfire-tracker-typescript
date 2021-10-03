import { IInitialState, Action } from './interfaces';

const initialState: IInitialState = {
    fireEvents: [],
    loading: false,
    error: false,
}


export const rootReducer = (state = initialState,action: Action<any>) => {
    switch(action.type) {
        case 'START_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SAVE_DATA':
            return {
                ...state,
                loading: false,
                fireEvents: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                erro: true,
            }
        default:
            return state;
    }
};