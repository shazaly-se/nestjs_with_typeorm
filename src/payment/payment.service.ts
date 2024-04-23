import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(   @InjectRepository(Payment)
  private paymentsRepository: Repository<Payment>){}
  create(createPaymentDto: CreatePaymentDto) {
    const res= this.paymentsRepository.save(createPaymentDto)
    return res
  }

  findAll() {
    return this.paymentsRepository.find()
  }

  findOne(id: number) {
   
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const existinPayment = await this.paymentsRepository.findOneBy({id:id})
    existinPayment.currency = updatePaymentDto.currency
    existinPayment.amount = updatePaymentDto.amount
    const updatePayment = this.paymentsRepository.save(existinPayment)
    return updatePayment
  }

  async remove(id: number) {
    const deletedPayment = await this.paymentsRepository.delete(id)
    return deletedPayment
  }
}
