import { Sandwich } from "./Sandwich";

export class SimpleSandwich implements Sandwich {
  make(): string {
    return 'Bread'
  }
}