import { useParams } from "react-router-dom";
import Manga from "../../json/Manga.json";

const MangaContent = () => {
  const { title } = useParams();
  const MangaDetail = Manga.find((manga) => manga.title === title);
  const { ratings, image, episodes } = MangaDetail;

  return (
    <div>
      <h1>{title}</h1>
      <p>Rating: {ratings}</p>
      <p>{episodes}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default MangaContent;
