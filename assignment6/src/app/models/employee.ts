import { Position } from '../models/position';

export class Employee {
  _id:string;
  FirstName: string;
  LastName: string;
  AddressStreet: string;
  AddressState: string;
  AddressCity: string;
  AddressZip: string;
  PhoneNum: string;
  Extension: number;
  Position: Position;
  HireDate: string;
  SalaryBonus: number;
  completed:boolean;
  __v:number;
}
