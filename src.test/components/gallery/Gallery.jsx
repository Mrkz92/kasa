
// import JSONData from "../../datas/holderList.json"
import Card from "../card/Card";
import "./_Gallery.scss";

export default function Gallery() {
  // const holderList = JSON.stringify(JSONData)

  return (
    <ul className='gallery'>
      <Card />
    </ul>
  );
}