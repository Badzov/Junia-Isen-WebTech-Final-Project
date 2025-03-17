import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { RatingRepository } from './rating.repository';
import { RatingEntity } from '../database/entities/rating.entity';
import { BookModule } from '../books/book.module';

@Module({
  imports: [TypeOrmModule.forFeature([RatingEntity]), BookModule], 
  controllers: [RatingController],
  providers: [RatingService, RatingRepository],
})
export class RatingModule {}