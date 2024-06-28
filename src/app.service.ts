import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postSomething(username: string, email: string): string {
    return `Hello ${username}! Your email is ${email}`;
  }
  putSomething(username: string): string {
    return `Username change to ${username}`;
  }
  deleteSomething(username: string): string {
    return `Deleted ${username}!`;
  }
}
