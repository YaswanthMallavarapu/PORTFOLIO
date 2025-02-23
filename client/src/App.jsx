import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Work from "./components/Works";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact";
function App() {
  return (
    <>
      <Navbar className="navbar" />
      <Profile />
      <Services />
      <Work />
      <Education />
      <Skills />
      <ContactMe />
    </>
  );
}

export default App;
