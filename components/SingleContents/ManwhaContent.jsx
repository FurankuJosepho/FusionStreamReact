import { useParams } from "react-router-dom";
import Manwha from "../../json/Manwha.json";
import "../../scss/SingleContents.scss";

const ManwhaContent = () => {
  const { title } = useParams();
  const ManwhaDetail = Manwha.find((manwha) => manwha.title === title);
  const { ratings, image, episodes, description } = ManwhaDetail;

  return (
    <section className="SingleContents">
      <div className="Container">
        <div className="Left">
          <img src={image} alt={title} />
        </div>
        <div className="Right">
          <div className="Details">
            <h1>{title}</h1>
            <p>{episodes}</p>
            <p>Rating: {ratings}</p>
            <p>Plot Sumarry: <span>{description}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManwhaContent;
