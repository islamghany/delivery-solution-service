import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Order } from "./Orders";
import { Length, IsEmail, IsFQDN, IsDate, Min, Max } from "class-validator";

@Entity()
export class Sender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    nullable: false,
  })
  @Length(4, 32)
  name: string;

  @Column({
    type: "citext",
    nullable: false,
  })
  @IsEmail()
  email: string;

  @Column({
    type: "citext",
    nullable: false,
  })
  @Column()
  @Min(6)
  @Max(72)
  password: string;

  @OneToMany(() => Order, (order) => order.sender)
  orders: Order[];
}
