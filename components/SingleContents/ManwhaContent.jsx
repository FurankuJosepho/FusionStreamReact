import { useParams } from "react-router-dom";
import Manwha from "../../json/Manwha.json";

const ManwhaContent = () => {
  const { title } = useParams();
  const ManwhaDetail = Manwha.find((manwha) => manwha.title === title);
  const { ratings, image, episodes } = ManwhaDetail;

  return (
    <div>
      <h1>{title}</h1>
      <p>Rating: {ratings}</p>
      <p>{episodes}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ManwhaContent;
