import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    currency: string;
  
    @Column()
    amount: number;
    @Column()
    xyz: number;
  
    @Column({ default: true })
    isActive: boolean;
}
