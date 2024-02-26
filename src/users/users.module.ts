// USERS MODULE

// External
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { User } from './domain/entities/user.entity';
import { UsersService } from './application/users.service';
import { UserRepository } from './infrastructure/users.repository';

// Internal

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IUserRepository', // Custom provider token
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
