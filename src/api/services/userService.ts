import { User, UserInput, UserOutput } from '../../database/models/User';
import * as userDal from '../../database/dal/user';

export const create = async (payload: UserInput): Promise<UserOutput> => userDal.create(payload);

export const retrieve = async (payload: string): Promise<UserOutput | null> =>
  await userDal.retrieve(payload);
