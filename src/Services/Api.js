import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = "0846bf312f0a1b3f0d9b691dd26eb2d9";


async function fetchTrendingMovies () {
  try {
    const response = await axios.get(
      `trending/all/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

//fetchSearchMovies().then(response =>console.log(response)) 

async function fetchSearchMovies(query) {
   try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};


//fetchSearchMovies('king').then(response =>console.log(response)) 

async function fetchMovieDetails(id) {
   try {
    const response = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//fetchMovieDetails(113082).then(response =>console.log(response)) 

async function fetchMovieCast(id) {
   try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

//fetchMovieCast(459003).then(response =>console.log(response)) 

async function fetchMovieReviews(id) {
   try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

//fetchMovieReviews(447365).then(response =>console.log(response)) 


export { fetchTrendingMovies, fetchSearchMovies, fetchMovieDetails, fetchMovieCast, fetchMovieReviews };





/*async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}*/







/*/*const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODQ2YmYzMTJmMGExYjNmMGQ5YjY5MWRkMjZlYjJkOSIsInN1YiI6IjY0YTE1NjU2ODFkYTM5MDEwYjhiN2ZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fu4JWQK_iKfB2CFB3482KCb1ZQWN0GnpevA4-rrxWVk',
    },
};
     
async function fetchTrendingMovies() {
    const response = await axios.get('/trending/all/day?language=en-US', options);
    console.log(response.data.results)
    return response.data.results;
}*/