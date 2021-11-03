import { Test, TestingModule } from '@nestjs/testing';
import { DeliverieController } from './deliverie.controller';
import { DeliverieService } from './deliverie.service';

describe('DeliverieController', () => {
  let controller: DeliverieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliverieController],
      providers: [DeliverieService],
    }).compile();

    controller = module.get<DeliverieController>(DeliverieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
