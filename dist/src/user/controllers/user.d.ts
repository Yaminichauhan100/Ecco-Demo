import { Request, Response, RestController } from '@libs/boat';
import { UserService } from '../services';
export declare class UserController extends RestController {
    private service;
    constructor(service: UserService);
    getProfile(req: Request, res: Response): Promise<Response>;
}
