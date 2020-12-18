import { getData } from "./service";
import { IMovie } from "./types/movide";
import { IMovideDbResult } from "./types/movide-db-result";

window.onload = async () => {
  getAndSetInitialData();
};

const getAndSetInitialData = async () => {
  const data = await getData<IMovideDbResult>();

  const html = createMoviesTemplate(data.results);
  setInnerHtml(document.body, html);
};

const createMovieTemplate = (movie: IMovie): string => {
  return `<div>${movie.title}</div>`;
};

const createMoviesTemplate = (movies: IMovie[]): string => {
  return movies.map(createMovieTemplate).join("");
};

const setInnerHtml = (element: HTMLElement, innerHtml: string): void => {
  element.innerHTML = innerHtml;
};
