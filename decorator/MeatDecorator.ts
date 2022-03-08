import { SandwichDecorator } from "./SandwichDecorator";

export class MeatDecorator extends SandwichDecorator {

  make(): string {
    return this.customSandwich.make() + this.addMeat();
  }

  private addMeat(): string {
    return ' + turkey';
  }
}