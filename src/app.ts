import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { BoatModule } from '@libs/boat';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    BoatModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
