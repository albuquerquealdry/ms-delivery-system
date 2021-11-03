import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliverieModule } from './deliverie/deliverie.module';

@Module({
  imports: [DeliverieModule, MongooseModule.forRoot('mongodb://localhost/payment')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
