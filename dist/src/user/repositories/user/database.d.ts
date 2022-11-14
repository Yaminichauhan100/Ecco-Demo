import { UserModel } from '../../models';
import { UserRepositoryContract } from './contract';
import { DatabaseRepository } from '@squareboat/nestjs-objection';
export declare class UserRepository extends DatabaseRepository<UserModel> implements UserRepositoryContract {
    model: UserModel;
}
