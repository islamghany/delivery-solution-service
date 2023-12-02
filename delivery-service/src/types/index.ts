import { Request } from "express";
import { Biker } from "src/db/entity/Bikers";
import { Sender } from "src/db/entity/Sender";
import { UserRoles } from "./enums";

export { OrderStatus } from "./enums";

export interface IRequest extends Request {
  sender?: Sender;
  biker?: Biker;
  user_id?: number;
  role?: UserRoles;
}
