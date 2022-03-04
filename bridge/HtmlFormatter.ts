import { Detail } from './Detail';
import { Formatter } from './Formatter';

export class HtmlFormatter implements Formatter {
  format(header: string, details: Detail[]): string {
    let formatted =
      '<table>' +
      '<th>' +
      'Classification' +
      '</th>' +
      '<th>' +
      header +
      '</th>';

    for (const detail of details) {
      formatted += '<tr><td>';
      formatted += detail.getLabel();
      formatted += '</td><td>';
      formatted += detail.getValue();
      formatted += '</td></tr>';
    }
    formatted += '</table>';

    return formatted;
  }
}
