import { IRequest } from "./../types/index";
import { senderRepository } from "../db";
import {
  invalidCredentialsResponse,
  serverErrorResponse,
} from "../helpers/errors";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Sender } from "../db/entity/Sender";
import { generateToken } from "../helpers/token";
import { validate, IsEmail, IsNotEmpty } from "class-validator";
import { plainToClass } from "class-transformer";
import { UserRoles } from "../types/enums";

export class LoginInput {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export const senderLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input = plainToClass(LoginInput, req.body);

  const errors = await validate(input);

  if (errors.length > 0) {
    return next(invalidCredentialsResponse());
  }

  // 1) validate the the sender
  let sender: Sender | null;
  try {
    sender = await senderRepository.findOneBy({
      email: input.email,
    });
    if (!sender || sender.password !== input.password) {
      return next(invalidCredentialsResponse());
    }
    return res.status(StatusCodes.OK).json({
      token: generateToken({
        id: sender.id,
        email: sender.email,
        role: UserRoles.SENDER,
      }),

      user: {
        id: sender.id,
        email: sender.email,
        name: sender.name,
      },
      type: "sender",
    });
  } catch (err: any) {
    return next(serverErrorResponse(err));
  }
};

export const getAuth = async (req: IRequest, res: Response) => {
  if (req.role === UserRoles.BIKER) {
    return res.status(200).json({ user: req.biker, type: UserRoles.BIKER });
  } else {
    return res.status(200).json({ user: req.sender, type: UserRoles.SENDER });
  }
};
