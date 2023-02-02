// typically we would store in {process.env.API_KEY}
const API_KEY = '6bc264e932d22970512536512e2d2567'

// helpers to simplicity
const requests = {
  originals: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  popularMovies: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  highestRatedMovies: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  popularKidsMovies: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  bestDramaMovies: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  bestMoviesFrom2010: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  theatres: `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
}
export default requests
