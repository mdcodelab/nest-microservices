import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Rider {
  @Prop()
  riderId: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export type RiderDocument = Rider & Document;

export const RiderSchema = SchemaFactory.createForClass(Rider);
