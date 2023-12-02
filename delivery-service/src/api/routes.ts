import { IRequest } from "./../types/index";
import { bikerLogin, claimOrder, deliverOrder } from "./bikers";
import { NextFunction, Response, Router } from "express";
import { checkAuth, protectedRoute } from "./middlewares";
import {
  addOrder,
  getIdleOrders,
  getSenderOrders,
  getToDoOrdersForBiker,
} from "./orders";
import { senderLogin, getAuth } from "./senders";

const router = Router();

router.post("/auth", checkAuth, protectedRoute, getAuth);

router.post("/sender/login", senderLogin);

router.post("/biker/login", bikerLogin);

//done
router.post("/orders", checkAuth, protectedRoute, addOrder);

// done
router.get("/orders/sender", checkAuth, protectedRoute, getSenderOrders);

//done
router.get(
  "/orders/biker/in-process",
  checkAuth,
  protectedRoute,
  getToDoOrdersForBiker
);

// done
router.get("/orders/biker/idle", checkAuth, protectedRoute, getIdleOrders);

//done
router.patch("/orders/:id/claim", checkAuth, protectedRoute, claimOrder);

//done
router.patch("/orders/:id/deliver", checkAuth, protectedRoute, deliverOrder);

export default router;
