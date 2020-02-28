import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GraphNodesRepository } from './repositories/graphNodes.repository';
import { ModulesRepository } from './repositories/modules.repository';
import { GraphsRepository } from './repositories/graphs.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'references-reproduction',
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      GraphNodesRepository,
      ModulesRepository,
      GraphsRepository,
    ]),
  ],
})
export class AppModule {}
