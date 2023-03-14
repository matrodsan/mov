import axios from "axios";

export default async function getSearch(query, setState) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`
  );
  const movies = await data.data.results;
  console.log(movies);
  setState(movies);
}
