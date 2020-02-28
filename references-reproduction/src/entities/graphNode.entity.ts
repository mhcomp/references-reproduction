import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Module } from './module.entity';
import { Graph } from './graph.entity';

@Entity()
export class GraphNode extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @PrimaryColumn()
  public graphId: string;

  @ManyToOne(
    () => Graph,
    graph => graph.id,
  )
  @JoinColumn({ name: 'graphId' })
  public graph: Graph;

  @Column()
  public moduleId: string;

  @ManyToOne(
    () => Module,
    module => module.id,
  )
  @JoinColumn({ name: 'moduleId' })
  public module: Module;

  @Column({ nullable: true })
  public successGraphNodeId?: string;

  @ManyToOne(
    () => GraphNode,
    graphNode => graphNode.id,
  )
  @JoinColumn({ name: 'successGraphNodeId' })
  public successGraphNode?: GraphNode;

  @Column({ nullable: true })
  public errorGraphNodeId?: string;

  @ManyToOne(
    () => GraphNode,
    graphNode => graphNode.id,
  )
  @JoinColumn({ name: 'errorGraphNodeId' })
  public errorGraphNode?: GraphNode;
}
