import { Request, Response } from 'express';
import { UserData } from '../data/UserData';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


class AuthenticationController {
  async signinWeb(request: Request, response: Response) {
    const {
      email,
      password
      } = request.body;

      dotenv.config();


      const userData = new UserData();

      const user = await userData.findOne(email);

      if (!user) {
        return response.status(400).send({error: 'User not found'});
      }

      if (password !== user.password) {
        return response.status(400).send({error: 'Invalid password'});
      }

      const token = await jwt.sign({id: user.id}, `${process.env.SECRET}`, {
        expiresIn: 86400
      })

      return response.status(200).send({
        user,
        token: token
      });

  }

  async reSignin(request: Request, response: Response) {

    const authHeader = request.headers.authorization;

    let userId = undefined;

    if (authHeader) {

      const parts = authHeader.split(' ');
      const [schemme, token] = parts;

      await jwt.verify(token, `${process.env.SECRET}`, (err, decoded) => {
        if (err) return response.status(401).send({error: 'Token invalid'})

        userId = decoded?.id;
      })

    }

    if (userId != undefined) {

      const userData = new UserData();
      const user = await userData.show(userId)
      return response.send({user: user[0]});

    }

    return response.status(400).send({error: 'token inválid'})
  }
}

export { AuthenticationController }
