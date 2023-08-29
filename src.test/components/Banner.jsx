import "./Banner.scss";

export default function Banner({ image, text }) {
  return (
    <div className="Banner">
      <img className="Banner__bg" src={image} />
      <div className="Banner__txt">
        <p className="Banner__p">{text}</p>
      </div>
    </div>
  );
}
