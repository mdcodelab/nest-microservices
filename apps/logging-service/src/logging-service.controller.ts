import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { LoggingService } from './logging-service.service';
import {
  IsString,
  IsNumber,
  validate,
  ValidationError,
  IsOptional,
} from 'class-validator';
import { plainToInstance } from 'class-transformer';

// DTO-ul definit direct aici
class SaveCoordinatesDto {
  @IsOptional()
  @IsString()
  riderId?: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}

@Controller('riders')
export class LoggingServiceController {
  constructor(private readonly loggingService: LoggingService) {}

  @Post('save')
  async saveCoordinates(@Body() body: Record<string, unknown>) {
    // Transformăm body în instanță de DTO
    const dto = plainToInstance(SaveCoordinatesDto, body);

    // Validăm
    const errors: ValidationError[] = await validate(dto);
    if (errors.length > 0) {
      // Returnăm prima eroare găsită
      const messages: string[] = errors.flatMap((err) => {
        if (!err.constraints) return [] as string[];
        return Object.values(err.constraints);
      });

      throw new BadRequestException(messages);
    }

    // Dacă validarea trece, apelăm service-ul
    return this.loggingService.saveCoordinates(
      dto.riderId,
      dto.latitude,
      dto.longitude,
    );
  }

  @Get(':riderId')
  async getRiderCoordinates(@Param('riderId') riderId: string) {
    return this.loggingService.getRiderCoordinates(riderId);
  }

  @Get()
  async getAllRidersCoordinates() {
    return this.loggingService.getAllRidersCoordinates();
  }
}
