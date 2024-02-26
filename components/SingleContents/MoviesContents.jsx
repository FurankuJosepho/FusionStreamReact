import { useParams } from "react-router-dom";
import Movies from "../../json/Movies.json";
import "../../scss/SingleContents.scss";

const MoviesContents = () => {
    const { title } = useParams();
    const MangaDetail = Movies.find((movies) => movies.title === title);
    const { image, duration, ratings, description } = MangaDetail;
  
  return (
    <section className="SingleContents">
    <div className="Container">
      <div className="Left">
        <img src={image} alt={title} />
      </div>
      <div className="Right">
        <div className="Details">
          <h1>{title}</h1>
          <p>Rating: {ratings}</p>
          <p>Plot Sumarry: <span>{description}</span></p>
        </div>
      </div>
    </div>
     <div className="Container2">
        <div className="Bottom">
          <h2>Duration: </h2>
          <h2>{duration}</h2>
        </div>
        <div className="Video">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        </div>
     </div>
  </section>
  )
}

export default MoviesContents