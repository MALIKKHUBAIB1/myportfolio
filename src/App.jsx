import "./App.css";
import About from "./component/About";
import AboutMe from "./component/AboutMe";
import LinkSection from "./component/LinkSection";

function App() {
  return (
    <div className="text-xl w-[60%] m-auto my-5 ">
      <div className="flex">
        {/* About Section */}
        <div className="w-8/12 text-justify p-4">
          <About />
          <LinkSection />
        </div>
        {/* Image Section */}
        <div className="w-4/12 p-4 flex h-[300px] overflow-hidden justify-center items-center">
          {/* You can adjust 300px to the height you prefer */}
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-full h-auto max-h-full object-fill rounded-lg"
          />
        </div>
      </div>
      {/* About Me Section */}
      <div className="p-4">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
