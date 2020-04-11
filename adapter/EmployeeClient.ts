import { Employee } from "./base/Employee";
import { EmployeeDB } from "./base/EmployeeDB";
import { EmployeeLdap } from "./base/EmployeeLdap";
import { EmployeeAdapterLdap } from "./EmployeeAdapterLdap";
import { EmployeeCSV } from "./base/EmployeeCSV";
import { EmployeeAdapterCSV } from "./EmployeeAdapterCSV";

export class EmployeeClient {
  public getEmployeeList(): Employee[] {
    const employees: Employee[] = [];

    const employeeFromDB: Employee = new EmployeeDB(
      "1234",
      "John",
      "Wick",
      "john@wick.com"
    );
    employees.push(employeeFromDB);

    const employeeFromLdap: EmployeeLdap = new EmployeeLdap(
      "chewie",
      "Solo",
      "Han",
      "han@solo.com"
    );
    employees.push(new EmployeeAdapterLdap(employeeFromLdap));

    const employeeFromCSV = new EmployeeCSV(
      "567,Sherlock,Holmes,sherlock@holmes.com"
    );
    employees.push(new EmployeeAdapterCSV(employeeFromCSV));

    return employees;
  }
}
