import {TNullable} from "../TDefault";

export type MessageDTO = {
    author: string;
    createdAt: TNullable<{
        nanoseconds: number;
        seconds: number;
    }>;
    nickname: string;
    message: string;
};
