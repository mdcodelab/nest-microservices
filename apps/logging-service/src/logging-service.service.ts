import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rider, RiderDocument } from './schema';

@Injectable()
export class LoggingService {
  constructor(
    @InjectModel(Rider.name)
    private readonly riderModel: Model<RiderDocument>,
  ) {}

  async saveCoordinates(
    riderId: string,
    latitude: number,
    longitude: number,
  ): Promise<RiderDocument> {
    const existing = await this.riderModel.findOne({ riderId });

    if (existing) {
      existing.latitude = latitude;
      existing.longitude = longitude;
      return existing.save();
    }

    const newRider = new this.riderModel({
      riderId,
      latitude,
      longitude,
    });

    return newRider.save();
  }

  async getRiderCoordinates(riderId: string): Promise<RiderDocument> {
    const rider = await this.riderModel.findOne({ riderId });

    if (!rider) {
      throw new NotFoundException(`Rider with id ${riderId} not found`);
    }

    return rider;
  }

  async getAllRidersCoordinates(): Promise<RiderDocument[]> {
    return this.riderModel.find().exec();
  }
}
