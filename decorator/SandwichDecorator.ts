import { Sandwich } from "./Sandwich";

export abstract class SandwichDecorator implements Sandwich {
  protected customSandwich: Sandwich

  constructor(customSandwich: Sandwich) {
    this.customSandwich = customSandwich;
  }

  make(): string {
    return this.customSandwich.make();
  }

}