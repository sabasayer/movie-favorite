import { IMovie } from "../types/movide";

export class MovieComponent {
  private movie: IMovie;

  constructor(movie: IMovie) {
    this.movie = movie;
  }

  createElement = (): HTMLElement => {
    const element = document.createElement("div");
    element.classList.add("movie-card");
    element.innerHTML = this.createMovieTemplate();

    this.initButtonEvent(element);

    return element;
  };

  createMovieTemplate = (): string => {
    return `<div class="movie-card__poster"><img src="https://image.tmdb.org/t/p/w200${this.movie.poster_path}"/></div>
                <div class="movie-card__title">${this.movie.title}</div>
                <div class="movie-card__footer">
                    <span>Vote:${this.movie.vote_count}</span>
                    <span class="flex-grow">Avarage:${this.movie.vote_average}</span>
                </div>
                <div class="movie-card__date">
                  ${this.movie.release_date}
                </div>
                <div class="movie-card__actions">
                    <button >Add</button>
                </div>
        `;
  };

  initButtonEvent(element: HTMLElement) {
    const button = this.findButton(element);
    this.bindEventToButton(button);
  }

  findButton(element: HTMLElement) {
    return element.querySelector("button");
  }

  bindEventToButton(button: HTMLElement): void {
    button.addEventListener("click", () => this.addToFavorite());
  }

  addToFavorite() {
    console.log("addtofavorite", this);
  }

  unbindEventFromButton(button: HTMLElement) {
    button.removeEventListener("click", () => this.addToFavorite);
  }
}
