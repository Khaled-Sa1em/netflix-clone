import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import Nav from '../components/Nav'

function HomeScreen({ requests }) {
  return (
    <>
      <Nav />
      <header className="header">
        <Banner fetchURL={requests.originals} />
      </header>
      <main className="main">
        <Row
          title="Popular Movies"
          name="1"
          fetchURL={requests.popularMovies}
          isLargeRow={true}
        />
        <Row
          title="Highest Rated Movies"
          name="2"
          fetchURL={requests.highestRatedMovies}
        />
        <Row
          title="Popular Kids Movies "
          name="3"
          fetchURL={requests.popularKidsMovies}
        />
        <Row
          title="Best Drama Movies"
          name="4"
          fetchURL={requests.bestDramaMovies}
        />
        <Row
          title="Best Movies From 2010"
          name="5"
          fetchURL={requests.bestMoviesFrom2010}
        />
        <Row title="Movies In Theatres" name="5" fetchURL={requests.theatres} />
      </main>
    </>
  )
}

export default HomeScreen
