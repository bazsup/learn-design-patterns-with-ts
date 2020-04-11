export class StringTokenizer {
  private _elements: string[];
  private _index = -1;
  constructor(values: string, delim: string) {
    this._elements = values.split(delim);
  }

  hasMoreElements(): boolean {
    return this._index < this._elements.length - 1;
  }

  nextToken(): string {
    ++this._index;
    return this._elements[this._index];
  }
}
