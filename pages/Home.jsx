//imports Scss
import "../scss/Home.scss";
//imports Boostraps
import { Container } from "react-bootstrap"
//imports 
import AnimeList from "../components/ListingPages/AnimeList";
import KoreanList from "../components/ListingPages/KoreanList";
import Manga from "../components/ListingPages/Manga";
import Manwha from "../components/ListingPages/Manwha";
import MovieList from "../components/ListingPages/MovieList";

const Home = () => {
  return (
    <main id="Home">
     <section id="HeroPage">
      <Container>
        <div className="Saying">
          <h1><span>W</span>atch<span> N</span>ow</h1>
          <p>&quot;Where Worlds Collide and Stories Unfold Come! Dive into Worlds Unveiled: Anime, Manga, Movies, and More!&quot;</p>
        </div>
        <a className="danger" href="#Series">Click Here!</a>
      </Container>
     </section>
     <section className="Light" id="Series">
      <AnimeList/>
     </section>
     <section className="Dark" id="KDrama">
     <KoreanList/>
     </section>
     <section className="Light" id="Manga">
      <Manga/>
     </section>
     <section className="Dark" id="Manwha">
     <Manwha/>
     </section>
     <section className="Light" id="Movie">
      <MovieList/>
     </section>
    </main>
  )
}

export default Home
