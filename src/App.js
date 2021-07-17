import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main>
        <div style={{height: 1500}}></div>
      </main>
    </div>
  );
}

export default App;
