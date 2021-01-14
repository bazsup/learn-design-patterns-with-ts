import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
  constructor(name: string, url: string) {
    super();
    this.name = name;
    this.url = url;
  }

  toString(): string {
    return this.print(this);
  }
}
