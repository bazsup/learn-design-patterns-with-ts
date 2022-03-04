import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {

  toString(): string {
    return this.print(this);
  }
}
