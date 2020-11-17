import { Language } from './Language';
import { Country } from './Country';
import { UserType } from './UserType';

export class Users{
  id: number;
  firstName: String;
  lastName: String;
  userType: UserType
  email: String;
  password: String;
  phoneNumber: String;;
  country_code: Country;
  language_code: Language;
  dateOfBirth: String;


}