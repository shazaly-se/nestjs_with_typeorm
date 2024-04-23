import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService:BookingService){}
    @Get("/reverse")
    reverse(){
        return this.bookingService.reverse()
    }
}
