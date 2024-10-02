export type GameType = {
    _id: string;
    title: string;
    description: string;
    platform: string;
    poster: string;
    rating: number;
    favCharacters: string[];
    createdAt: Date;
};