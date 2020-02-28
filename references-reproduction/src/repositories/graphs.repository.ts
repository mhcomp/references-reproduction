import { EntityRepository, Repository } from 'typeorm';

import { Graph } from '../entities/graph.entity';

@EntityRepository(Graph)
export class GraphsRepository extends Repository<Graph> {}
