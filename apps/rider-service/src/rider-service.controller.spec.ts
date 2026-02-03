import { Test, TestingModule } from '@nestjs/testing';
import { RiderServiceController } from './rider-service.controller';
import { RiderService } from './rider-service.service';

describe('RiderServiceController', () => {
  let riderServiceController: RiderServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
  controllers: [RiderServiceController],
  providers: [RiderService],
    }).compile();

    riderServiceController = app.get<RiderServiceController>(
      RiderServiceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riderServiceController.getHello()).toBe('Hello World!');
    });
  });
});
