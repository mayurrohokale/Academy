import Header from "./Academy/Header";
import Footer from "./Academy/Footer";

export default function Layout({children}) {
  return (
    <div className="bg-black flex flex-col">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
