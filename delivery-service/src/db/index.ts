import "reflect-metadata";
import { DataSource } from "typeorm";
import { Biker } from "./entity/Bikers";
import { Order } from "./entity/Orders";
import { Sender } from "./entity/Sender";
import { Insert1671831202409 } from "./migrations/1671831202409-Insert";
import { config } from "../config";
// postgresql://root:secret@localhost:5431/delivery?sslmode=disable

const AppDataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT as number,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  entities: [Sender, Order, Biker],
  migrations: [Insert1671831202409],
  synchronize: true,
  logging: false,
});

export const senderRepository = AppDataSource.getRepository(Sender);
export const bikerRepository = AppDataSource.getRepository(Biker);
export const ordersRepository = AppDataSource.getRepository(Order);

export { AppDataSource };
