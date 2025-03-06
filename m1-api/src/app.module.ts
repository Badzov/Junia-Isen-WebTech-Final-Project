import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { AuthorModule } from './modules/authors/author.module';

@Module({
  imports: [DatabaseModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
