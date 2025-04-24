import Navbar from "./components/Navbar";
import Head from "./components/Head";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import MyWorks from "./components/MyWorks";
function App() {

  return (
    <>
      <div>
        <Navbar />
        <Head/>
        <AboutMe/>
        <Service/>
        <MyWorks/>
      </div>
    </>
  );
}

export default App;
