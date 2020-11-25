import { Language } from './Language';
import { Country } from './Country';
import { UserType } from './UserType';
import { constructor } from 'process';

export class Users{
  // id: number;
  // firstName: String;
  // lastName: String;
  // userType: UserType;
  // email: String;
  // password: String;
  // phoneNumber: String;
  // country_code: Country;
  // language_code: Language;
  // dateOfBirth: String;;

  constructor(
    public id: number,
    public firstName: String,
    public lastName: String,
    public usertype: UserType,
    public email: String,
    public password: String,
    public phoneNumber: String,
    public country_code: Country,
    public language_code: Language,
    public dateOfBirth: String,
  ){}

}