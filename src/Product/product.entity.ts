import { Entity, Column, PrimaryColumn, BaseEntity, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Products extends BaseEntity {
  @ObjectIdColumn()
  _id: ObjectId

  @Column()
  name: string;

  @Column()
  price: number;
}
