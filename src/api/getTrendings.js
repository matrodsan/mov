import axios from "axios";

export default async function getTrendings(setState) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_TMDB_URL;
  const data = await axios.get(`${baseUrl}trending/all/week?api_key=${apiKey}`);
  const movies = await data.data.results;
  console.log(movies);
  setState(movies);
}
