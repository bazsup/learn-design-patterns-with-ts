import { Detail } from "./Detail";
import { Movie } from "./Movie";
import { Printer } from "./Printer";

export class MoviePrinter extends Printer {
  private movie: Movie;

  constructor(movie: Movie) {
    super();
    this.movie = movie;
  }
  protected getHeader(): string {
    return this.movie.getClassification();
  }
  protected getDetails(): Detail[] {
    const details: Detail[] = new Array();

    details.push(new Detail('Title', this.movie.getTitle()));
    details.push(new Detail('Year', this.movie.getYear()));
    details.push(new Detail('Runtime', this.movie.getRuntime()));

    return details;
  }

}