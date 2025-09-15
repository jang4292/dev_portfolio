import { Module } from '@nestjs/common';
import { UserController } from 'src/list/user.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './list/list.controller';

@Module({
  imports: [],
  controllers: [AppController, ListController, UserController],
  providers: [AppService],
})
export class AppModule { }
