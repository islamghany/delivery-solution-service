import {
  validate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsDate,
} from "class-validator";
import { plainToClass, Type, Transform } from "class-transformer";
import { OrderStatus } from "./enums";

export class IDParamDto {
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  @IsNumber()
  id: number;
}

export class AddOrderDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  pick_up_address: string;

  @IsNotEmpty()
  delivery_address: string;
}

export class ClaimOrderDto {
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  picked_up_at: Date;
}

export class DeliverOrderDto {
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  delivered_at: Date;
}
