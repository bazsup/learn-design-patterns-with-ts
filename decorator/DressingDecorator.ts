import { SandwichDecorator } from "./SandwichDecorator";

export class DressingDecorator extends SandwichDecorator {
  make(): string {
    return this.customSandwich.make() + this.addDressing();
  }

  private addDressing(): string {
    return ' + mustard';
  }
}