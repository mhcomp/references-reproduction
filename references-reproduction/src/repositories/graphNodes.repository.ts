import { EntityRepository, Repository } from 'typeorm';

import { GraphNode } from '../entities/graphNode.entity';

@EntityRepository(GraphNode)
export class GraphNodesRepository extends Repository<GraphNode> {}
