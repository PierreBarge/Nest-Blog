import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './article.entity/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articlesRepository: Repository<ArticleEntity>,
  ) {}

  async getArticles(): Promise<ArticleEntity[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(id: number): Promise<ArticleEntity[]> {
    return await this.articlesRepository.find({
      select: ['title', 'content', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: ArticleEntity): Promise<ArticleEntity> {
    return this.articlesRepository.save(article);
  }

  deleteArticle(id: number): void {
    this.articlesRepository.delete(id);
  }
}
