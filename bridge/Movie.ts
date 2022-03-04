export class Movie {
  private classification: string;
  private runtime: string;
  private title: string;
  private year: string;

  constructor() {
    this.classification = '';
    this.runtime = '';
    this.title = '';
    this.year = '';
  }

  getClassification() {
    return this.classification;
  }
  getRuntime() {
    return this.runtime;
  }
  getTitle() {
    return this.title;
  }
  getYear() {
    return this.year;
  }

  setClassification(classification: string) {
    this.classification = classification;
  }
  setRuntime(runtime: string) {
    this.runtime = runtime;
  }
  setTitle(title: string) {
    this.title = title;
  }
  setYear(year: string) {
    this.year = year;
  }

}