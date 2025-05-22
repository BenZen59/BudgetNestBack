// categories.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Icon } from '../icon/icon.entity';
import { Color } from '../color/color.entity';

@Entity({ name: 'categories' })
export class Categories {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column()
  name_category: string;

  @ManyToOne(() => Icon)
  @JoinColumn({ name: 'id_icon' })
  icon: Icon;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'id_color' })
  color: Color;
}
