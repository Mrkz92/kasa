import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
