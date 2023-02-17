import "./Card.css";
const Card = (data) => {
  return (
    <div className="card">
      <img src={data.src.large} alt="image" />
      <h3 className="photographer">{data.photographer}</h3>
    </div>
  );
};

export default Card;
