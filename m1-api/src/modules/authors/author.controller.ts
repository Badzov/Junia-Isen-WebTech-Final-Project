import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorModel } from './author.model';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './author.dto';

// We create the endpoints for the user to acces the data or edit it.
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  public async getAuthors(): Promise<AuthorModel[]> {
    return this.authorService.getAuthors();
  }

  @Post()
  public async createAuthor(
    @Body() input: CreateAuthorDto,
  ): Promise<AuthorModel> {
    return this.authorService.createAuthor(input);
  }
}
