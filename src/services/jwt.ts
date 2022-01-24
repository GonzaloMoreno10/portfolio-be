import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

export const constructAssertion = (user: IUser) => {
  const payload = {
    name: user.name,
    lastName: user.lastName,
    birthday: user.birthday,
    email: user.email,
  };

  const privateKey = Buffer.from(process.env.SERVER_KEY || '', 'base64');

  const sign = jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
  });

  return sign;
};
