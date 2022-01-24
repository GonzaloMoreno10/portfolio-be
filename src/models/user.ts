/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user';
import bcrypt from 'bcrypt';

const usersSchema = new Schema({
  id: Object,
  name: String,
  lastName: String,
  birthday: String,
  email: String,
  password: String,
});

usersSchema.pre<IUser>('save', async function (next) {
  const user = this;
  //if(!user.IsModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

usersSchema.methods.encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

usersSchema.methods.matchPassword = async function (password: string) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};
export default model<IUser>('users', usersSchema);
