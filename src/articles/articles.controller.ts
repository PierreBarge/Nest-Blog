import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleEntity } from './article.entity/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  getAll() {
    return this.service.getArticles();
  }

  @Get(':id')
  get(@Param('id') params) {
    return this.service.getArticle(params.id);
  }

  @Post()
  create(@Body() article: ArticleEntity) {
    return this.service.saveArticle(article);
  }

  @Put()
  update(@Body() article: ArticleEntity) {
    return this.service.saveArticle(article);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
