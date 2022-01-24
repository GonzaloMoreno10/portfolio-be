import { Request, Response } from 'express';
import { IUser } from '../interfaces/user';
import { userRepository } from '../repositories/users';

class UsersController {
  async updateUsers(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, lastName, birthday } = req.body;
      const exists = await userRepository.getUserById(id);
      if (exists) {
        if (name && lastName && birthday) {
          const user: Partial<IUser> = {
            name,
            lastName,
            birthday,
          };
          await userRepository.updateUser(id, user);
          const result = await userRepository.getUserById(id);
          res.status(result ? 200 : 400).json({
            message: result ? 'Usuario actualizado' : 'Error',
            data: result ? result : {},
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  async getUsers(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const result = await userRepository.getUserById(id);
        res.status(result ? 200 : 400).json({
          data: result ? result : {},
          message: result ? undefined : 'Usuario no existente',
        });
      } else {
        const result = await userRepository.getUsers();
        res.status(result ? 200 : 400).json({
          data: result ? result : {},
          message: result ? undefined : 'No existen usuarios',
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const { name, lastName, birthday, email, password } = req.body;
      if (name && lastName && birthday && email && password) {
        const user: IUser = {
          name,
          lastName,
          birthday,
          email,
          password,
        };
        const result = await userRepository.createUser(user);
        res
          .status(result ? 200 : 400)
          .json({ message: result ? 'Usuario creado' : 'Error', data: result ? result : {} });
      } else {
        res.status(401).json('Invalid body');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export const usersController = new UsersController();
