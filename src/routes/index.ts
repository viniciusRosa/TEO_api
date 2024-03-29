import express from 'express';
import messageRotes from './messageRotes';
import schoolRotes from './schoolRotes';
import pointRoutes from './pointRotes'
import studentRotes from './studentRotes';
import userRotes from './userRotes';
import vacancyrequestRoutes from './vacancyrequestRotes'
import routeRoutes from './routeRoutes';
import dashboardData from './dashboardData';
import authRotes from './authRotes';

const routes = express.Router();

routes.use('/', authRotes);
routes.use('/', messageRotes);
routes.use('/', userRotes);
routes.use('/', vacancyrequestRoutes);
routes.use('/', routeRoutes);
routes.use('/', schoolRotes);
routes.use('/', pointRoutes);
routes.use('/', studentRotes);
routes.use('/data', dashboardData);


export default routes;

