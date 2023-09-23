import "./Stack.scss";

export default function Stack({ className, ...attrs }) {
  return <div className={`Stack ${className}`} {...attrs} />;
}
