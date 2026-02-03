import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Rider {
  @Prop({ required: true }) // riderId va fi primit din logging-service
  riderId: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  email?: string;
}

export type RiderDocument = Rider & Document;
export const RiderSchema = SchemaFactory.createForClass(Rider);
