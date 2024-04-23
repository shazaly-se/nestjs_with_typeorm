import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
    reverse(){
        return "reverse done by service"
    }
}
