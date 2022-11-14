import { UserRepositoryContract } from '../repositories';
import { UserSignedUp } from '../events/userSignedUp';
export declare class UserService {
    private users;
    constructor(users: UserRepositoryContract);
    get(): Promise<Record<string, any>>;
    userSignedUp(event: UserSignedUp): void;
}
