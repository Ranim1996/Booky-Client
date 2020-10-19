import { Country } from './Country';
import { Language } from './Language';
import { UserType } from './UserType';

export interface User{
    id: number;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    phoneNumber: String;
    language: Language;
    country: Country;
    dateOfBirth: String;
  }
  