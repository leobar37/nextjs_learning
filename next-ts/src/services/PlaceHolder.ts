const baseUrl = "https://jsonplaceholder.typicode.com";
import axios from "axios";
import { Ipost } from "models/Post";

export class PlaceHolderApi {
  static async posts() {
    return axios.get<Ipost[]>(`${baseUrl}/posts`);
  }
  static async postById(id: number) {
    return axios.get<Ipost>(`${baseUrl}/posts/${id}`);
  }
}
