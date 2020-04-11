import { Employee } from "./base/Employee";
import { EmployeeCSV } from "./base/EmployeeCSV";
import { printEmployee } from "./printEmployee";

export class EmployeeAdapterCSV implements Employee {
  private _instance: EmployeeCSV;

  constructor(instance: EmployeeCSV) {
    this._instance = instance;
  }

  getId(): string {
    return this._instance.getId() + "";
  }
  getFirstName(): string {
    return this._instance.getFirstname();
  }
  getLastName(): string {
    return this._instance.getLastname();
  }
  getEmail(): String {
    return this._instance.getEmailAddress();
  }
  toString: () => string = printEmployee.bind(this);
}
