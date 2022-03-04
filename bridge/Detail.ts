export class Detail {
  private label: string;
  private value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }

  getLabel() {
    return this.label;
  }
  getValue() {
    return this.value;
  }

  setLabel(label: string) {
    return this.label = label;
  }
  setValue(value: string) {
    return this.value = value;
  }

}