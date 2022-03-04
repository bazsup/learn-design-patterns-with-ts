import { Detail } from "./Detail";
import { Formatter } from "./Formatter";

export class PrintFormatter implements Formatter {
  format(header: string, details: Detail[]): string {
    let formatted = `${header}\n`

    for (const detail of details) {
      formatted += `${detail.getLabel()}:${detail.getValue()}\n`;
    }

    return formatted;
  }

}