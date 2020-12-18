import { IMovie } from "./movide";

export interface IMovideDbResult{
    page:number;
    total_page:number;
    total_results:number
    results:IMovie[]
}