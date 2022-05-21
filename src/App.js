import UserInfo from "./components/UserInfo";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="card-container">
      <div className="card">
        <img
          src="user_img.jpg"
          className="object-cover card-image"
          alt="logo"
          width="400"
          height="400"
        />
        <div className="card-body">
          <UserInfo />
          <About />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
