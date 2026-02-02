import { Test, TestingModule } from '@nestjs/testing';
import { RiderSeviceController } from './rider-sevice.controller';
import { RiderSeviceService } from './rider-sevice.service';

describe('RiderSeviceController', () => {
  let riderSeviceController: RiderSeviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RiderSeviceController],
      providers: [RiderSeviceService],
    }).compile();

    riderSeviceController = app.get<RiderSeviceController>(RiderSeviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riderSeviceController.getHello()).toBe('Hello World!');
    });
  });
});
