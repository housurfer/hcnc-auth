import express from "express";
import { json } from "body-parser";
import { userRouter } from "./routes/user/userRoutes";
import 'express-async-errors';
import { errorHandler } from "@hcnc/common";
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed : false,
  secure : process.env.NODE_ENV !== 'test'
}));
app.use(userRouter);
app.use(errorHandler);

export { app }