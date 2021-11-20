import express from 'express';
import { GetDashboardDataController } from  '../controllers/dashboard/GetDashboardDataController';

const dashboardDataRoutes = express.Router();

const getDashboardDataController = new GetDashboardDataController();

dashboardDataRoutes.get('/schoolamount', getDashboardDataController.schoolAmount);
dashboardDataRoutes.get('/studentamount', getDashboardDataController.studentAmount);
dashboardDataRoutes.get('/routeamount', getDashboardDataController.routeAmount);

dashboardDataRoutes.get('/vacancyamount', getDashboardDataController.vacancyAmount);
dashboardDataRoutes.get('/routedata', getDashboardDataController.routeData);
dashboardDataRoutes.get('/queueamount', getDashboardDataController.queueAmountData);


export default dashboardDataRoutes;
