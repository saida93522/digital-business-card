import About from "./components/About";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card rounded-lg shadow-2xl shadow-black">
      <img
        src="card_image.jpg"
        className="card-image object-cover min-w-full"
        alt="logo"
      />
      <div className="card-body container">
        <UserInfo />
        <Button />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
