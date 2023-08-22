import { useState } from "react";
import "./Collapse.scss";

export function Collapse({ title, children, open = false }) {
  const [_open, _setOpen] = useState(open);
  const toggleOpen = () => _setOpen((open) => !open);
  return (
    <div
      className={`Collapse ${_open ? "Collapse--open" : "Collapse--closed"}`}
    >
      <h3 className="Collapse__title" onClick={toggleOpen}>
        {title}
      </h3>
      <div className="Collapse__content">{children}</div>
    </div>
  );
}
