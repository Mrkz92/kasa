export default function Show({ children }) {
  return (
    <div className={`Show__content ${_open ? "Show__content--open" : ""}`}>
      {children}
    </div>
  );
}
