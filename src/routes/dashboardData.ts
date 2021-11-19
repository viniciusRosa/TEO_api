import express from 'express';
import { GetDashboardDataController } from  '../controllers/dashboard/GetDashboardDataController';

const dashboardDataRoutes = express.Router();

const getDashboardDataController = new GetDashboardDataController();

dashboardDataRoutes.get('/schoolamount', getDashboardDataController.schoolAmount);


export default dashboardDataRoutes;
