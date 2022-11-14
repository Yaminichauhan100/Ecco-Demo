import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import { UserModuleConstants } from './constants';
import { UserRepository } from './repositories';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: UserModuleConstants.userRepo, useClass: UserRepository },
  ],
})
export class UserModule {}
