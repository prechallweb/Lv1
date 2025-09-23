import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): {
        id: number;
        email: string;
        nickname: string;
    }[];
}
