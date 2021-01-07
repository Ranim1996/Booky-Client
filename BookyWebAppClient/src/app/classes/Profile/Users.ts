import { Language } from './Language';
import { UserType } from './UserType';
import { constructor } from 'process';

export class Users{

  constructor(
    public id: number,
    public firstName: String,
    public lastName: String,
    public usertype: UserType,
    public email: String,
    public password: String,
    public dateOfBirth: String,
  ){}

}