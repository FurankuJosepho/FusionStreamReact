//imports Boostraps
import { Card } from "react-bootstrap"
//imports 
import Movies from "../../json/Movies.json"
import { Link } from "react-router-dom";

const MovieList = () => {
  return (
    <div className="Anime">
    <h2><span>M</span>ovies</h2>
    <div className="Anime-Series">
        {
          Movies.map ( movie => {
            return (
              <Card key={ movie.id }  style={{ width: '13rem' }}>
                <Card.Img variant="top" src={ movie.image }/>
                <Card.Body>
                  <Card.Title>{ movie.title}</Card.Title>
                  <Card.Text>Duration : { movie.duration}</Card.Text>
                  <Card.Text>{ movie.ratings}</Card.Text>
                  <Link to={`/movies/${movie.title}`} className="danger">Watch Now</Link>
                </Card.Body>
              </Card>
            );
          })
        }
        <a href="#Manwha" className="lastUp"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></a>
    </div>
  </div>
  )
}

export default MovieList
