export interface Character {
    image: string | undefined;

    id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    affiliation: string,
    deletedAt: string | null;
    originPlanet?: Planet;
    transformations?: Transformation[];
    

}

export interface Planet {
    id: number,
    name: string,
    isDestroyed: boolean,
    description: string,
    image: string,
    deletedAt: string | null;
}

export interface Transformation {
    id: number,
    name: string,
    image: string,
    ki: string,
    deletedAt: string | null;
}

export interface CharactersResponse {
    items: Character[];
    meta:{
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    };
    links: {
        first: string;
        previous: string;
        next: string;
        last:string;
    };
}