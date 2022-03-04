import { Detail } from "./Detail";

export interface Formatter {
  format(header: string, details: Detail[]): string;
}