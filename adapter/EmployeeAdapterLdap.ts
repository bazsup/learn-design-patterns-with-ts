import { EmployeeLdap } from "./base/EmployeeLdap";
import { Employee } from "./base/Employee";
import { printEmployee } from "./printEmployee";

export class EmployeeAdapterLdap implements Employee {
  private _instance: EmployeeLdap;

  constructor(instance: EmployeeLdap) {
    this._instance = instance;
  }

  getId(): string {
    return this._instance.cn;
  }
  getFirstName(): string {
    return this._instance.givenName;
  }
  getLastName(): string {
    return this._instance.surname;
  }
  getEmail(): String {
    return this._instance.mail;
  }

  toString: () => string = printEmployee.bind(this);
}
