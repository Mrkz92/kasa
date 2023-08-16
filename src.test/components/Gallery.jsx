import Thumb from "../components/Thumb";
import "../styles/Gallery.scss";

const Gallery = () => {
  return (
    <div className='gallery'>
      <Thumb className="thumb-instance" />
      <Thumb className="design-component-instance-node" />
      <Thumb className="thumb-2" />
      <Thumb className="thumb-3" />
      <Thumb className="thumb-4" />
      <Thumb className="thumb-5" />
    </div>
  );
};

export default Gallery