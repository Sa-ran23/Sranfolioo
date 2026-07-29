import Header from "../src/components/Header.jsx";
import Home from "../src/components/Home.jsx";
import Skills from "../src/components/Skills.jsx";
import Experience from "../src/components/Experience.jsx";
import Projects from "../src/components/Projects.jsx";
import Contact from "../src/components/Contact.jsx";
import Footer from "../src/components/Footer.jsx";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {


  return (
    <>
     <ScrollIndicator />
     < Header />
     < Home />
     < Skills />
     < Experience />
     < Projects />
     < Contact />
     < Footer />
    </>
  )
}

export default App
