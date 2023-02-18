import { startServer } from './start-server';
import 'express-async-errors';
import { errorHandler } from '@hcnc/common';
import cookieSession from 'cookie-session';
import { app } from './app';

startServer(app);
