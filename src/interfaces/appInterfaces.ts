export interface ICategory {
    title: string;
    id: number;
}

export interface IGeometry {
    date: string;
    type: string;
    coordinates: number[]
}

export interface ISource {
    id: string;
    urL: string;
}

export interface IEvent {
    categories: any;
    description: string;
    geometries: IGeometry[];
    id: string;
    link: string;
    sources: ISource
    title: string;
}