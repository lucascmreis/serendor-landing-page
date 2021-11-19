import "./App.css";
import heroImg from "./assets/hero.jpg";
import orquestra01 from "./assets/orquestra01.jpg";
import orquestra02 from "./assets/orquestra02.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Contato" },
    { url: "#", title: "O projeto" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={heroImg} />
      <Slider
        imageSrc={orquestra01}
        title={"Aulas de música"}
        subtitle={
          "Para todas as idades!"
        }
      />
      <Slider
        imageSrc={orquestra02}
        title={"Concertos"}
        subtitle={"Apresentações de diferentes gêneros musicais"}
        flipped={true}
      />
    </div>
  );
}

export default App;
