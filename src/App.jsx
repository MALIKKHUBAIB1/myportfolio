import "./App.css";
import AboutMe from "./component/AboutMe";
import AboutSection from "./component/AboutSection";
import Educations from "./component/Educations";
import Imagesection from "./component/Imagesection";
import Skills from "./component/Skills";
import WorkExperience from "./component/WorkExperience";

function App() {
  return (
    <div className="text-xl w-[60%] m-auto my-5 ">
      <div className="flex">
        {/* About Section */}
        <AboutSection />
        {/* Image Section */}
        <Imagesection />
      </div>
      {/* About Me Section */}
      <div className="p-4">
        <AboutMe />
        <Skills />
        <WorkExperience />
      </div>
      {/* SKills  */}
      <div className="-mt-4 mb-2 p-4">
        <Educations />
      </div>
    </div>
  );
}

export default App;
