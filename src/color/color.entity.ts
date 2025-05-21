// color.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'color' })
export class Color {
  @PrimaryGeneratedColumn()
  id_color: number;

  @Column()
  hex: string;
}
