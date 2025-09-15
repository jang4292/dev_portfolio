import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  list() {
    return 'This action returns user data';
  }
}
