// import headshot from './images/headshot.jpg';
// import heroBackground from './images/hero-background.jpg';
import './styles/App.scss';
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Body } from "./components/Body";

function App() {
  return (
    <div className="app">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
