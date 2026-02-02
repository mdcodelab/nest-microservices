import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rider, RiderDocument } from './schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggingService {
  constructor(
    @InjectModel(Rider.name)
    private readonly riderModel: Model<RiderDocument>,
  ) {}

  async saveCoordinates(
    riderId: string | undefined,
    latitude: number,
    longitude: number,
  ): Promise<RiderDocument> {
    // Dacă nu există riderId, generează unul
    const id = riderId || uuidv4();
    const existing = await this.riderModel.findOne({ riderId: id });

    if (existing) {
      existing.latitude = latitude;
      existing.longitude = longitude;
      return existing.save();
    }

    const newRider = new this.riderModel({
      riderId: id,
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
