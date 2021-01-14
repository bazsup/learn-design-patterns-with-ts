export abstract class MenuComponent {
  name: string;
  url: string;

  menuComponents: MenuComponent[] = [];

  getString(): string {
    return this.name;
  }

  getUrl(): string {
    return this.url;
  }
  
  add(_: MenuComponent): MenuComponent {
    throw new Error('Method not implemented.')
  }
  
  remove(_: MenuComponent): MenuComponent {
    throw new Error('Method not implemented.')
  }

  abstract toString(): string;

  print(menuComponent: MenuComponent): string {
    return `${this.name}: ${this.url}\n`;
  }
}
