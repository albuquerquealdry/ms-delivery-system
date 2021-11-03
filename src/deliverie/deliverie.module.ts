import { Module } from '@nestjs/common';
import { DeliverieService } from './deliverie.service';
import { DeliverieController } from './deliverie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsSchema, Payments } from './entities/deliverie.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Payments.name, schema: PaymentsSchema }])],
  controllers: [DeliverieController],
  providers: [DeliverieService]
})
export class DeliverieModule {}
