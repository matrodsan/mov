import axios from "axios";

export default async function getMovie(id, setState) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  const movieData = await data.data;
  setState(movieData);
}
