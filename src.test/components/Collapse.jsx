import arrowDown from "../assets/arrow-down.svg";
import { useEffect, useRef, useState } from "react";
import "./Collapse.scss";

// import Show from "./Show";

export function Collapse({ title, children, open = false }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.clientHeight + 30 + "px");
    }
  }, []);
  const [_open, _setOpen] = useState(open);
  const toggleOpen = () => _setOpen((open) => !open);
  const arrowRotation = _open ? "rotateX(180deg)" : "rotateX(0deg)";
  return (
    <div
      className={`Collapse ${_open ? "Collapse--open" : "Collapse--closed"}`}
      style={{ "--height": height }}
    >
      <div className="Collapse__header" onClick={toggleOpen}>
        <h3 className="Collapse__title">{title}</h3>
        <img
          src={arrowDown}
          alt="fermé"
          className="Collapse__arrow"
          style={{ transform: arrowRotation }}
        />
      </div>
      <div className="Collapse__content">
        <div className="Collapse__padding" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
