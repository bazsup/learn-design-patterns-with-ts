import { Employee } from "./Employee";
import { printEmployee } from "../printEmployee";

export class EmployeeDB implements Employee {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  constructor(id: string, firstName: string, lastName: string, email: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }
  getId(): string {
    return this._id;
  }
  getFirstName(): string {
    return this._firstName;
  }
  getLastName(): string {
    return this._lastName;
  }
  getEmail(): String {
    return this._email;
  }
  toString: () => string = printEmployee.bind(this);
}
