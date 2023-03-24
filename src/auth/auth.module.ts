import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from '../user/user.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
    ],
})
export class AuthModule {}
