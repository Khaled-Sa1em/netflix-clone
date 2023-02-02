import React from 'react'
import instance from '../helpers/axios'
import { nanoid } from 'nanoid'
function Row(props) {
  // this url i used it with any image any were with my api_key
  const base_url = 'https://image.tmdb.org/t/p/original/'
  const api_key = '?api_key=c08a90a39a6d3dc92f91cf28a21f5d98'
  const [movies, setMovies] = React.useState([])
  React.useEffect(() => {
    async function fetchData() {
      const res = await instance.get(props.fetchURL)
      setMovies(res.data.results)
      return res
    }
    // console.log(fetchData())
    fetchData()
  }, [props.fetchURL])

  return (
    <div className="rowContainer">
      <h2 className="row--title title">Row {props.title}</h2>
      <div className="row__movies">
        {movies.map((movie) => {
          const img = props.isLargeRow
            ? movie?.poster_path
            : movie?.backdrop_path
          return (
            <img
              key={nanoid()}
              // cause src takes string
              src={`${base_url}${img}${api_key}`}
              className="movie--card img"
              alt={movie?.name || movie?.original_title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Row
