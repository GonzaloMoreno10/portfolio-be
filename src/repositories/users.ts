import { IUser } from '../interfaces/user';
import usersModel from '../models/user';

class UsersRepository {
  async getUserById(id: string) {
    try {
      return await usersModel.findById(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getUsers() {
    try {
      return await usersModel.find();
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async createUser(user: IUser) {
    try {
      return await usersModel.create(user);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async updateUser(id: string, user: Partial<IUser>) {
    try {
      return await usersModel.findByIdAndUpdate(id, user);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export const userRepository = new UsersRepository();
