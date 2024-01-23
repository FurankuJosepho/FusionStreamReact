//imports Boostraps
import { Card } from "react-bootstrap"
//imports 
import Anime from "../../json/Aseries.json"
import { Link } from "react-router-dom";

const AnimeList = () => {
  return (
    <div className="Anime">
      <h2><span>A</span>nime</h2>
      <div className="Anime-Series">
          {
            Anime.map ( anime => {
              return (
                <Card key={ anime.id }  style={{ width: '13rem' }}>
                  <Card.Img variant="top" src={ anime.image }/>
                  <Card.Body>
                    <Card.Title>{anime.title}</Card.Title>
                    <Card.Text>{anime.episodes}</Card.Text>
                    <Card.Text>{anime.ratings}</Card.Text>
                    <Link to={`/series/${anime.title}`} className="danger">Watch Now</Link>
                  </Card.Body>
                </Card>
              );
            })
          }
          <a href="#KDrama" className="firstDown"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>
      </div>
    </div>
  )
}

export default AnimeList
