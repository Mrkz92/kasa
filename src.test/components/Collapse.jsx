import { useEffect, useRef, useState } from "react";
import "./Collapse.scss";

// import Show from "./Show";

export function Collapse({ title, children, open = false }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    setHeight(contentRef.current.clientHeight + "px");
  }, []);
  const [_open, _setOpen] = useState(open);
  const toggleOpen = () => _setOpen((open) => !open);
  return (
    <div
      className={`Collapse ${_open ? "Collapse--open" : "Collapse--closed"}`}
      style={{ "--height": height }}
    >
      <h3 className="Collapse__title" onClick={toggleOpen}>
        {title}
      </h3>
      <div className="Collapse__content">
        <div className="Collapse__padding" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
