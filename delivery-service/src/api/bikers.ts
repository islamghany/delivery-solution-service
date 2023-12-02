import { generateToken } from "./../helpers/token";
import { Biker } from "../db/entity/Bikers";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { bikerRepository, ordersRepository } from "../db";

import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";
import { ClaimOrderDto, DeliverOrderDto, IDParamDto } from "../types/schema";
import { IRequest, OrderStatus } from "../types";

import {
  authenticationRequiredResponse,
  failedValidationResponse,
  invalidCredentialsResponse,
  notFoundResponse,
  orderInDifferentStatus,
  orderIsNotInProcess,
  serverErrorResponse,
} from "./../helpers/errors";
import { Order } from "../db/entity/Orders";
import { UserRoles } from "../types/enums";
export const bikerLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input = req.body;

  // 1) validate the the biker
  let biker: Biker | null;
  try {
    biker = await bikerRepository.findOne({
      where: {
        email: input.email,
      },
    });

    if (!biker || biker.password !== input.password) {
      return next(invalidCredentialsResponse());
    }
    return res.status(StatusCodes.OK).json({
      token: generateToken({
        id: biker.id,
        email: biker.email,
        role: UserRoles.BIKER,
      }),

      user: {
        id: biker.id,
        email: biker.email,
        name: biker.name,
      },
      type: "biker",
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
};

export const claimOrder = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.biker?.id) {
    return next(authenticationRequiredResponse());
  }

  // 1) validate the params
  const params = plainToClass(IDParamDto, req.params);
  const input = plainToClass(ClaimOrderDto, req.body);

  let errors: ValidationError[] = [];
  try {
    errors = await validate(params);
    if (errors.length > 0) {
      return next(failedValidationResponse("Invalid biker_id"));
    }

    errors = await validate(input);
    if (errors.length > 0) {
      return next(failedValidationResponse("invalid " + errors[0].property));
    }
    // check if the picked_time in the past
    if (new Date() < input.picked_up_at) {
      next(
        failedValidationResponse("invalid picked-up time must be in the past")
      );
    }
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  // 2) check if order is exsited and is still idle

  let order: Order | null;
  try {
    order = await ordersRepository.findOne({
      where: {
        id: params.id,
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
  if (!order) {
    return next(notFoundResponse());
  }
  if (order.status !== OrderStatus.IDLE) {
    return next(orderInDifferentStatus(order.status));
  }

  // 3) if yes make it in process and give it the initali pickof time.

  try {
    const updatedOrder = await ordersRepository.update(order.id, {
      biker: req.biker,
      status: OrderStatus.IN_PROCESS,
      picked_up_at: input.picked_up_at,
    });

    if (!updatedOrder.affected) {
      return next(serverErrorResponse(new Error("No row affected")));
    }
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
  return res.status(StatusCodes.OK).json({
    message: "Order Claimed Successfully",
  });
};

export const deliverOrder = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.biker?.id) {
    return next(authenticationRequiredResponse());
  }

  // 1) validate the params
  const params = plainToClass(IDParamDto, req.params);
  const input = plainToClass(DeliverOrderDto, req.body);

  let errors: ValidationError[] = [];
  try {
    errors = await validate(params);
    if (errors.length > 0) {
      return next(failedValidationResponse("Invalid biker_id"));
    }

    errors = await validate(input);
    if (errors.length > 0) {
      return next(failedValidationResponse("invalid " + errors[0].property));
    }
    // check if the delivery_time in the past

    if (new Date() < input.delivered_at) {
      next(
        failedValidationResponse("invalid delivery time must be in the past")
      );
    }
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
  // 2) check if the sender is the responsible of the order and it in the in-process status

  let order: Order | null;
  try {
    order = await ordersRepository.findOne({
      where: {
        id: params.id,
      },
      relations: {
        biker: true,
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
  if (!order) {
    return next(notFoundResponse());
  }
  if (order.status !== OrderStatus.IN_PROCESS) {
    return next(orderIsNotInProcess());
  }
  if (order.biker.id !== req.biker.id) {
    return next(
      failedValidationResponse("this order is processed by other biker")
    );
  }
  // delivery_date must be after that picked up time.
  if (input.delivered_at < order.picked_up_at) {
    return next(
      failedValidationResponse("delivered_at must be after picked-up date")
    );
  }
  // 3) change the the status for the order and make it deliverd
  try {
    const updatedOrder = await ordersRepository.update(order.id, {
      status: OrderStatus.DELIVERED,
      delivered_at: input.delivered_at,
    });
    if (!updatedOrder.affected) {
      return next(serverErrorResponse(new Error("No row affected")));
    }
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
  return res.status(StatusCodes.OK).json({
    message: "Order Delivered Successfully",
  });
};
