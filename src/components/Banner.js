import React from 'react'
// import BannerImg from '../img/b6.jpg'
import instance from '../helpers/axios'
const base_url = 'https://image.tmdb.org/t/p/original/'
const api_key = '?api_key=6bc264e932d22970512536512e2d2567'
function Banner(props) {
  // to change banner
  const [movie, setMovie] = React.useState({})

  React.useEffect(() => {
    async function fetchData() {
      const res = await instance.get(props.fetchURL)
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ],
      )
      return res
    }
    fetchData()
  }, [props.fetchURL])
  // console.log(movie)
  function truncateString(str, n) {
    return str?.length > n ? str.substring(0, 150) : str
  }

  return (
    <div
      className="banner"
      style={{
        background: `url('${base_url}${movie?.poster_path}${api_key}') top center / 100% 100% no-repeat 
    padding-box content-box `,
      }}
    >
      <div className="container raw flex-column">
        <h1 className="banner__title title">
          {/* {movie?.title ? movie.title : movie.name} */}
          {movie?.original_title || movie?.name}
        </h1>
        <div className="banner__buttons buttons">
          <button className="banner__btn btn">Play</button>
          <button className="banner__btn btn">my list</button>
        </div>
        <p className="banner__disc txt">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Banner
