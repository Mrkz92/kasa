import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer className="Layout__Footer" />
    </div>
  );
}
