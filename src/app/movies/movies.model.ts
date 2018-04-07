export interface IMovie {
    title: string,
    director: number,
    producer: string,
    imagem: string;
}

export class Movie implements IMovie {
    title: string;
    director: number;
    producer: string;
    imagem: string;
}