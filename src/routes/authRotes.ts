import express from 'express';
import { AuthenticationController } from  '../controllers/AuthenticationController';

const authRoutes = express.Router();

const authenticationController = new AuthenticationController();

authRoutes.post('/web/signin', authenticationController.signinWeb);
authRoutes.get('/resignin', authenticationController.reSignin);

// authRoutes.get('/studentamount', getDashboardDataController.studentAmount);


export default authRoutes;
