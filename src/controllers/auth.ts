/* eslint-disable @typescript-eslint/no-explicit-any */
import userModel from '../models/user';
import { Request, Response } from 'express';
import { constructAssertion } from '../services/jwt';

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user: any = await userModel.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid User' });
        }
        if (!(await user.matchPassword(password))) {
          return res.status(401).json({ message: 'Invalid Password' });
        }
        const token = constructAssertion(user);
        return res.status(200).json({ token_type: 'bearer', token: token });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export const authController = new AuthController();
