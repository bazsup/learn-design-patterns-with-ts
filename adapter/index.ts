import { EmployeeClient } from "./EmployeeClient";
import { Employee } from "./base/Employee";

(() => {
  function main() {
    const employeeClient: EmployeeClient = new EmployeeClient();
    const employees: Employee[] = employeeClient.getEmployeeList();

    console.log(employees.toString());
  }
  main();
})();
