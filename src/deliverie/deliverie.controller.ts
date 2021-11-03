import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliverieService } from './deliverie.service';
import { CreateDeliverieDto } from './dto/create-deliverie.dto';
import { UpdateDeliverieDto } from './dto/update-deliverie.dto';

@Controller('deliverie')
export class DeliverieController {
  constructor(private readonly deliverieService: DeliverieService) {}

  @Post()
  
  create(@Body() createDeliverieDto: CreateDeliverieDto) {
    return this.deliverieService.create(createDeliverieDto);
  }

  @Get()
  findAll() {
    return this.deliverieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverieService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverieDto: UpdateDeliverieDto) {
    return this.deliverieService.update(id, updateDeliverieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverieService.remove(id);
  }
}
