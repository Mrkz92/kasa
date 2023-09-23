import "./Banner.scss";

export default function Banner({ image, text, context }) {
  return (
    <div className={`Banner Banner--${context}`}>
      <img className="Banner__bg" src={image} />
      {text && (
        <div className="Banner__txt">
          <p className="Banner__p">{text}</p>
        </div>
      )}
    </div>
  );
}
