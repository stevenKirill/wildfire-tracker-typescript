import { IEvent } from "../interfaces/appInterfaces"

export interface IInitialState {
    fireEvents: IEvent[];
    loading: boolean;
    error: boolean;
}

export type Action<TPayload> = {
    type: string;
    payload?: TPayload;
}

export interface IActionCreator<P> {
    type: string;
    (payload: P): Action<P>;
}