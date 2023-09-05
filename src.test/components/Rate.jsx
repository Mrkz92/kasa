// import star from "../assets/star.svg";
import { Icon } from "@iconify/react";
import "./Rate.scss";

export default function Rate({ rating, maxStar = 5 }) {
  if (typeof rating !== "number") return null;

  return (
    <div className="Rate">
      {/* {rating} */}
      {Array(maxStar)
        .fill("full", 0, rating)
        .fill("empty", rating, maxStar)
        .map((e, i) => (
          <Icon
            className={`Rate__star Rate__star--${e}`}
            key={i}
            icon="ic:round-star"
          />
        ))}
    </div>
  );
}
