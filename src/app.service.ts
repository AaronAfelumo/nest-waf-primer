import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): {} {
    return {message: 'Aaron is in!', title: 'Ayanfe'};
    }
  getHome(): {} {
      return {title: 'Home Page'};
      }
  getAboutUs(): {} {
      return {title: 'About Us Page'};
      } 
}
