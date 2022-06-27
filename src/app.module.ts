import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros/livros.controller';
import { LivrosService } from './livros/livros.service';
import { Livro } from './livros/model/livro.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3007,
      username: 'root',
      password: 'admin',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [
    AppController,
    LivrosController,
  ],
  providers: [
    AppService, 
    LivrosService
  ],
})
export class AppModule {}
