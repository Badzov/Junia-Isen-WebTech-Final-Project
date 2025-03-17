import { Body, Controller, Get, Post, Patch, Delete, NotFoundException, Param } from '@nestjs/common';
import { AuthorModel } from './author.model';
import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';

// We create the endpoints for the user to acces the data or edit it.

@Controller('authors') 
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get() // /api/authors
  public async getAuthors(): Promise<AuthorModel[]> {
    return this.authorService.getAuthors();
  }

  @Get(':id') // /api/authors/:id 
  public async getAuthorById(@Param('id') id: string): Promise<AuthorModel> {
    const author = await this.authorService.getAuthorById(id);
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  @Post() // /api/authors 
  public async createAuthor(
    @Body() input: CreateAuthorDto,
  ): Promise<AuthorModel> {
    return this.authorService.createAuthor(input);
  }

  @Patch(':id') // /api/authors/:id
  public async updateAuthor(
    @Param('id') id: string,
    @Body() input: UpdateAuthorDto,
  ): Promise<AuthorModel> {
    const author = await this.authorService.updateAuthor(id, input);
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  @Delete(':id') // /api/authors/:id
  public async deleteAuthor(@Param('id') id: string): Promise<void> {
    const author = await this.authorService.getAuthorById(id);
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    await this.authorService.deleteAuthor(id);
  }
}
