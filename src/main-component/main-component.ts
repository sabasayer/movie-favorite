import { MovieComponent } from "../movie-component/movie-component";
import { getData } from "../service";
import { IMovie } from "../types/movide";
import { IMovieDbResult } from "../types/movide-db-result";
import "./main-component.scss";

export class MainComponent {
  private movies: MovieComponent[] = [];

  getAndSetInitialData = async () => {
    const data = await getData<IMovieDbResult>();
    this.initializeMovies(data.results);
    this.render();
  };

  initializeMovies(movies: IMovie[]) {
    this.movies = movies.map(this.createMovie);
  }

  createMovie(data: IMovie) {
    return new MovieComponent(data);
  }

  render(): void {
    const element = this.createElement();
    const movieElements = this.createMovieElements();

    element.append(...movieElements);
    this.appendToBody(element);
  }

  createMovieElements() {
    return this.movies.map((e) => e.createElement());
  }

  createElement() {
    const element = document.createElement("div");
    element.classList.add("movies-container");
    return element;
  }

  appendToBody(element: HTMLElement) {
    document.body.append(element);
  }
}
