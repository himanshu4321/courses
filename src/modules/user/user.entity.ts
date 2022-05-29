import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ length: 36 })
  password: string;

  @Column()
  description: string;

  @Column({ default: () => false })
  status: boolean;

  @Column({ nullable: true })
  image: string;
}
