import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rider, RiderDocument } from './schema';

@Injectable()
export class RiderService {
  constructor(
  @InjectModel(Rider.name) private readonly riderModel: Model<RiderDocument>,
  ) {}

  // Returnează un mesaj de test
  getHello(): string {
    return 'Hello from Rider Service!';
  }

  // Creează un rider nou dacă nu există deja
  async createRider(riderId: string): Promise<RiderDocument> {
    const existing = await this.riderModel.findOne({ riderId });
    if (existing) return existing;

    const rider = new this.riderModel({ riderId });
    return rider.save();
  }

  // Găsește un rider după riderId
  async getRiderById(riderId: string): Promise<RiderDocument | null> {
    return this.riderModel.findOne({ riderId }).exec();
  }

  // Returnează toți riderii
  async getAllRiders(): Promise<RiderDocument[]> {
    return this.riderModel.find().exec();
  }
}
