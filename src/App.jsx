import Navbar from "./components/Navbar";
import Head from "./components/Head";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
function App() {

  return (
    <>
      <div>
        <Navbar />
        <Head/>
        <AboutMe/>
        <Service/>
        <MyWorks/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
