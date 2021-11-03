import { Test, TestingModule } from '@nestjs/testing';
import { DeliverieService } from './deliverie.service';

describe('DeliverieService', () => {
  let service: DeliverieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliverieService],
    }).compile();

    service = module.get<DeliverieService>(DeliverieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
