import { Employee } from "./base/Employee";

export function printEmployee(this: Employee): string {
  return (
    `{ ID: ${this.getId()}, First name: ${this.getFirstName()}` +
    `, Last name: ${this.getLastName()}, Email: ${this.getEmail()} }`
  );
}
