import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Generated } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryColumn()
  @Generated('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: false })
  isDone: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', default: null })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime', default: null })
  updatedAt: Date;

}
