import { Controller, Get } from '@nestjs/common';

@Controller('lists')
export class ListController {
  @Get()
  list() {
    return 'This action returns all lists';
  }
}
