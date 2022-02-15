import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  fullName: string;

  @Column('int')
  age: number;

  @Column({ length: 15 })
  gender: string;
}
