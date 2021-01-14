import { MenuComponent } from "./MenuComponent";

export class Menu extends MenuComponent {
  constructor(name: string, url: string) {
    super();
    this.name = name;
    this.url = url;
  }

  add(menuComponent: MenuComponent): MenuComponent {
    this.menuComponents.push(menuComponent);
    return menuComponent;
  }

  remove(menuComponent: MenuComponent): MenuComponent {
    const index = this.menuComponents.indexOf(menuComponent, 0);
    if (index > -1) {
      this.menuComponents.splice(index, 1);
    }
    return menuComponent;
  }

  toString(): string {
    let result = "";

    result += this.print(this);
    result += this.menuComponents
      .map((menuComp) => menuComp.toString())
      .join("");
    return result;
  }
}
