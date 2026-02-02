import { Test, TestingModule } from '@nestjs/testing';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingService } from './logging-service.service';

describe('LoggingServiceController', () => {
  let loggingServiceController: LoggingServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoggingServiceController],
      providers: [LoggingService],
    }).compile();

    loggingServiceController = app.get<LoggingServiceController>(
      LoggingServiceController,
    );
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(loggingServiceController).toBeDefined();
    });
  });
});
