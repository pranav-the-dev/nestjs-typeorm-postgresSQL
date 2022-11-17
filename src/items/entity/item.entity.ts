import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemsEntity {
  @PrimaryGeneratedColumn('uuid')
  itemId: string;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'itemDescription',
    nullable: false,
    default: '',
  })
  description: string;
}
