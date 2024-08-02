import express from 'express';
// import employeeRouter from './task.routes';
import StudentRouter from './task1.route';
const routes = express.Router();
 
// routes.use('/', employeeRouter)
routes.use('/',StudentRouter)
export default routes;