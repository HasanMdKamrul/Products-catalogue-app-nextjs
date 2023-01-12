import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Main;
