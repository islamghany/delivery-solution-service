import { OrderStatus } from "../../types";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Sender } from "./Sender";
import { Biker } from "./Bikers";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: "text",
  })
  title: string;

  @Column({
    nullable: false,
    type: "text",
  })
  pick_up_address: string;

  @Column({
    nullable: false,
    type: "text",
  })
  delivery_address: string;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.IDLE,
  })
  status: OrderStatus;

  @ManyToOne(() => Sender, (sender) => sender.orders, {
    nullable: false,
    onDelete: "CASCADE",
  })
  sender: Sender;

  @ManyToOne(() => Biker, (biker) => biker.orders, {
    nullable: true,
    onDelete: "CASCADE",
  })
  biker: Biker;

  @CreateDateColumn()
  created_at: Date;

  @Column({
    type: "timestamp",
    nullable: true,
  })
  picked_up_at: Date;

  @Column({
    type: "timestamp",
    nullable: true,
  })
  delivered_at: Date;
}
