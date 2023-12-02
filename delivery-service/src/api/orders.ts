import { serverErrorResponse } from "./../helpers/errors";
import { ordersRepository } from "../db";
import { Order } from "../db/entity/Orders";
import {
  authenticationRequiredResponse,
  badRequestResponse,
} from "../helpers/errors";
import { IRequest, OrderStatus } from "../types";
import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AddOrderDto } from "../types/schema";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { InsertResult } from "typeorm";

export const getSenderOrders = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.sender?.id) {
    return next(authenticationRequiredResponse());
  }

  // 2) get all the order for the sender
  let orders: Order[];
  try {
    orders = await ordersRepository.find({
      where: {
        sender: {
          id: req.sender.id,
        },
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  return res.status(StatusCodes.OK).json(orders.reverse());
};

export const addOrder = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.sender?.id) {
    return next(authenticationRequiredResponse());
  }

  // 1) validate the input
  const input = plainToClass(AddOrderDto, req.body);

  try {
    const errors = await validate(input);
    if (errors.length >= 1) {
      return next(badRequestResponse());
    }
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  // 2) insert the order

  let insertedOrder: InsertResult;
  try {
    insertedOrder = await ordersRepository.insert({
      sender: req.sender,
      ...input,
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  return res.status(StatusCodes.CREATED).json(insertedOrder.raw[0]);
};

export const getIdleOrders = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.biker?.id) {
    return next(authenticationRequiredResponse());
  }
  // 1)  find the available orders

  let orders: Order[];
  try {
    orders = await ordersRepository.find({
      where: {
        status: OrderStatus.IDLE,
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  return res.status(StatusCodes.OK).json(orders.reverse());
};

export const getToDoOrdersForBiker = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.biker?.id) {
    return next(authenticationRequiredResponse());
  }
  // 1)  find the in-process orders for that  biker

  let orders: Order[];
  try {
    orders = await ordersRepository.find({
      where: {
        status: OrderStatus.IN_PROCESS,
        biker: req.biker,
      },
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }

  return res.status(StatusCodes.OK).json(orders.reverse());
};
