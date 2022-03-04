import { Detail } from "./Detail";
import { Formatter } from "./Formatter";

export abstract class Printer {
  print(formatter: Formatter) {
    return formatter.format(this.getHeader(), this.getDetails());
  }

  protected abstract getHeader(): string;
  protected abstract getDetails(): Detail[];
}