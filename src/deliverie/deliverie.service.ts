import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliverieDto } from './dto/create-deliverie.dto';
import { UpdateDeliverieDto } from './dto/update-deliverie.dto';
import { Payments, PaymentsDocument } from './entities/deliverie.entity';

@Injectable()
export class DeliverieService {
  constructor(@InjectModel(Payments.name) private PaymentsModel: Model<PaymentsDocument>) {}
  create(createDeliverieDto: CreateDeliverieDto) {
    const deliverie =  new this.PaymentsModel(createDeliverieDto);
    return deliverie.save()
  }

  findAll() {
    return this.PaymentsModel.find()
  }

  findOne(id:string) {
    return `This action returns a #${id} deliverie`;
  }

  update(id: string, updateDeliverieDto: UpdateDeliverieDto) {
    return this.PaymentsModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
      
        $set : {delivery:true}
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return `This action removes a #${id} deliverie`;
  }
}
