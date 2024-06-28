import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async postSomething(@Body() createDto: { username: string; email: string }) {
    const { username, email } = createDto;

    return this.appService.postSomething(username, email);
  }
  @Put()
  async putSomething(@Body() createDto: { username: string }) {
    const { username } = createDto;
    return this.appService.putSomething(username);
  }
  @Delete()
  async deleteSomething(@Body() createDto: { username: string }) {
    const { username } = createDto;
    return this.appService.deleteSomething(username);
  }
}
