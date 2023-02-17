import Card from "./Card";
import data from "./helpers/data";
import "./Main.css";

const Main = () => {
  console.log(data);
  return (
    <div>
      <h1 className="title">Image Gallery</h1>
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default Main;
