import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Module extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  // ...
}
