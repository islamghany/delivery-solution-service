import jwt from "jsonwebtoken";
import { UserRoles } from "../types/enums";

interface TokenPayload {
  id: number;
  email: string;
  role: UserRoles;
}
const privateKey = process.env?.PRIVATE_KEY as string;

export const generateToken = (payload: TokenPayload) => {
  try {
    const token = jwt.sign(payload, privateKey, {
      expiresIn: "30d",
    });
    return token;
  } catch (err) {
    throw err;
  }
};

export const verifyToken = (token: string): TokenPayload | undefined => {
  try {
    const payload = jwt.verify(token, privateKey);
    if (typeof payload !== "string") {
      return {
        id: payload.id as number,
        email: payload.email as string,
        role: payload.role as UserRoles,
      };
    }
  } catch (err) {
    throw err;
  }
};
