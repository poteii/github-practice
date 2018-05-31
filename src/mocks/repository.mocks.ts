import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'description about ionic native',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'description about ionic native',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'description about ionic native',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Camera',
        description: 'description about ionic native',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;