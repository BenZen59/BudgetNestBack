// icon.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'icon' })
export class Icon {
  @PrimaryGeneratedColumn()
  id_icon: number;

  @Column()
  name_icon: string;

  @Column()
  provider: string;
}
