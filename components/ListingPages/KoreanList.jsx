//imports Boostraps
import { Card } from "react-bootstrap"
//imports 
import Korean from "../../json/Kseries.json"
import { Link } from "react-router-dom";

const KoreanList = () => {
  return (
    <div className="Anime">
      <h2><span>K</span>-<span>D</span>rama</h2>
      <div className="Anime-Series">
          {
            Korean.map ( korean => {
              return (
                <Card key={ korean.id }  style={{ width: '13rem' }}>
                  <Card.Img variant="top" src={ korean.image }/>
                  <Card.Body>
                    <Card.Title>{ korean.title}</Card.Title>
                    <Card.Text>{ korean.episodes}</Card.Text>
                    <Card.Text>{ korean.ratings}</Card.Text>
                    <Link to={`/series/${ korean.title}`} className="danger">Watch Now</Link>
                  </Card.Body>
                </Card>
              );
            })
          }
          <a href="#Series" className="up"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></a>
          <a href="#Manga" className="down"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>
      </div>
    </div>
  )
}

export default KoreanList
