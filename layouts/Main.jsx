import Navbar from "../components/core/Navbar";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Main;
