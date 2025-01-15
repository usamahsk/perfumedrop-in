import { Entity, Column, PrimaryGeneratedColumn,IsNull, Unique, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity()
export class Users extends BaseEntity{
  @PrimaryColumn({nullable:false,unique:true})
  id: string;

  @Column({nullable:false})
  name: string;

  @Column({unique:true})
  email: string;
}
