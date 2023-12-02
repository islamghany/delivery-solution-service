import { Order } from "./Orders";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Biker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    nullable: false,
  })
  name: string;

  @Column({
    type: "citext",
    nullable: false,
  })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.biker)
  orders: Order[];
}
