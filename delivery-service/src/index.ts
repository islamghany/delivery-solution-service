require("dotenv").config();
import {
  notFoundResponse,
  HttpError,
  //  authenticationRequiredResponse,
} from "./helpers/errors";
import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
import router from "./api/routes";
// import { asyncWrapper } from "./helpers/asyncWrapper";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { AppDataSource } from "./db";
import { config } from "./config";
const app = express();

const swaggerData = fs.readFileSync(
  path.join(__dirname, "../swagger.json"),
  "utf8"
);

const swaggerDocument = JSON.parse(swaggerData);
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

const PORT = config.PORT;

app.use(router);

app.use("*", (req, res, next) => {
  next(notFoundResponse());
});

// express provide a special middleware to catch errors for us.
// it should be called in last thing in your app otherwise some errors can be slip.
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (err.code === StatusCodes.INTERNAL_SERVER_ERROR) console.log(err);

  res.status(err.code).json({
    message: err.message,
  });
});

AppDataSource.initialize()
  .then(() => {
    AppDataSource.runMigrations().then(() => {
      app.listen(PORT, () => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${PORT}`
        );
      });
    });
  })
  .catch((err) => console.error(err));

// hanlding panics (uncaughtException) and grancifully shutdown
// the server and close all open connection

//Handle unhandled promise rejections.
process.on("unhandledRejection", (err: Error, promise: Promise<any>) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  process.exit(1);
  throw err;
});

// Handle programmer errors.
process.on("uncaughtException", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  process.exit(1);
});

// handle gracefully shutdown when terminating the server CTRL+C
process.on("SIGTERM", () => {
  console.log("TERMINATING THE SERVER! 💥 Shutting down...");
  process.exit(1);
});
process.on("SIGINT", () => {
  console.log("TERMINATING THE SERVER! 💥 Shutting down...");
  process.exit(1);
});
