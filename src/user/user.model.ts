import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop({ default: false })
    isAdmin?: boolean;

    @Prop({ default: false })
    favorites?: [];
}

export const UserModel = SchemaFactory.createForClass(User);
