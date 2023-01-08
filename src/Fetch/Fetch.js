export const baseUrl = 'https://api.themoviedb.org';
export const key = 'bc8e4f8ef35238fae81789cd185c5d63';
export const type = 'week';
export async function FetchTrending(baseUrl, key, type) {
  const response = await fetch(
    `${baseUrl}/3/trending/movie/${type}?api_key=${key}`
  );
  if (response.ok) {
    return response.json();
  }
}

async function FetchSearchMovies(baseUrl, key, query) {
  const response = await fetch(
    `${baseUrl}/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  if (response.ok) {
    return response.json();
  }
}

async function FetchMovieDetails(baseUrl, id, key) {
  const response = await fetch(
    `${baseUrl}/3/movie/${id}?api_key=${key}&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
}

async function FetchCredits(baseUrl, key, id) {
  const response = await fetch(
    `${baseUrl}/3/movie/${id}/credits?api_key=${key}&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
}
async function FetchReviews(baseUrl, key, id) {
  const response = await fetch(
    `${baseUrl}/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`

  );
  if (response.ok) {
    return response.json();
  }
}

const api = {
  FetchTrending,
  FetchSearchMovies,
  FetchMovieDetails,
  FetchCredits,
  FetchReviews,
};

export default api;
