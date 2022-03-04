import { HtmlFormatter } from './HtmlFormatter';
import { Movie } from './Movie'
import { MoviePrinter } from './MoviePrinter';
import { PrintFormatter } from './PrintFormatter';

(() => {
  function main() {
    const movie: Movie = new Movie();
    movie.setClassification('Action');
    movie.setTitle('John Wick');
    movie.setRuntime('2:15');
    movie.setYear('2014');

    const printFormatter = new PrintFormatter();
    const moviePrinter = new MoviePrinter(movie);

    const printedMaterial = moviePrinter.print(printFormatter);

    console.log(printedMaterial);

    const htmlFormatter = new HtmlFormatter();

    const htmlMaterial = moviePrinter.print(htmlFormatter);

    console.log(htmlMaterial);
  }

  main();
})();