import express from 'express';
import messageRotes from './messageRotes';
import schoolRotes from './schoolRotes';
import pointRoutes from './pointRotes'
import studentRotes from './studentRotes';
import userRotes from './userRotes';
import vacancyrequestRoutes from './vacancyrequestRotes'
import routeRoutes from './routeRoutes';

const routes = express.Router();

routes.use('/', messageRotes);
routes.use('/', userRotes);
routes.use('/', vacancyrequestRoutes);
routes.use('/', routeRoutes);

routes.use('/', schoolRotes);
routes.use('/', pointRoutes);
routes.use('/', studentRotes);


export default routes;

