import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string{
    return 'Hi my name is lucky shrestha'
  }
}
