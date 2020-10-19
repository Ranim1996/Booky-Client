import { Language } from './Language';
import { Country } from './Country';
import { UserType } from './UserType';
import { constructor } from 'process';

export class Users{
  // id: number;
  // firstName: String;
  // lastName: String;
  // type: UserType
  // email: String;
  // password: String;
  // phoneNumber: String;
  // country: Country;
  // language: Language;
  // dateOfBirth: String;

  //constractures
  constructor(
    public id: number, 
    public firstName: String, 
    public lastName: String, 
    public dateOfBirth: String, 
    public type: UserType, 
    public email: String, 
    public password: String,
    public phoneNumbar: String, 
    public country: Country, 
    public language: Language,
    ) {}
}