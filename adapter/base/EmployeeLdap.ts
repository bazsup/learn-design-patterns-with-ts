export class EmployeeLdap {
  private _cn: string;
  private _surname: string;
  private _givenName: string;
  private _mail: string;

  constructor(cn: string, surname: string, givenName: string, mail: string) {
    this._cn = cn;
    this._surname = surname;
    this._givenName = givenName;
    this._mail = mail;
  }

  /**
   * Getter cn
   * @return {string}
   */
  public get cn(): string {
    return this._cn;
  }

  /**
   * Getter surname
   * @return {string}
   */
  public get surname(): string {
    return this._surname;
  }

  /**
   * Getter givenName
   * @return {string}
   */
  public get givenName(): string {
    return this._givenName;
  }

  /**
   * Getter mail
   * @return {string}
   */
  public get mail(): string {
    return this._mail;
  }
}
