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

  abstract toString(): string;

  print(menuComponent: MenuComponent): string {
    return `${this.name}: ${this.url}\n`;
  }
}
