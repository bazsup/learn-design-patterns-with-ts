import { StringTokenizer } from "../utils/StringTokenizer";

export class EmployeeCSV {
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _emailAddress: string;

  constructor(values: string) {
    const tokenizer: StringTokenizer = new StringTokenizer(values, ",");
    if (tokenizer.hasMoreElements()) {
      this._id = parseInt(tokenizer.nextToken());
    }

    if (tokenizer.hasMoreElements()) {
      this._firstname = tokenizer.nextToken();
    }

    if (tokenizer.hasMoreElements()) {
      this._lastname = tokenizer.nextToken();
    }

    if (tokenizer.hasMoreElements()) {
      this._emailAddress = tokenizer.nextToken();
    }
  }

  getId(): number {
    return this._id;
  }
  getFirstname(): string {
    return this._firstname;
  }
  getLastname(): string {
    return this._lastname;
  }
  getEmailAddress(): string {
    return this._emailAddress;
  }
}
