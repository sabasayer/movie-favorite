import { movieDbAppKey } from "./app.const";

const createBaseUrl = (): string => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${movieDbAppKey}`;
};

const baseUrl = createBaseUrl();

export const getData = async <T>(): Promise<T> => {
  const json = await fetch(
    `${baseUrl}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );

  return json.json();
};
