import "./App.css";
import AboutMe from "./component/AboutMe";
import AboutSection from "./component/AboutSection";
import Educations from "./component/Educations";
import Imagesection from "./component/Imagesection";
import Skills from "./component/Skills";
import WorkExperience from "./component/WorkExperience";
function App() {
  return (
    <div className="text-xl w-full max-w-screen-lg mx-auto px-4">
      {/* About Section with Image */}
      <div className="flex flex-col md:flex-row md:space-x-6 items-center text-start">
        <AboutSection />
        <Imagesection />
      </div>
      {/* About Me Section */}
      <div className="p-4">
        <AboutMe />
      </div>
      {/* Skills & Work Experience */}
      <div className="p-4">
        <Skills />
        <WorkExperience />
      </div>

      {/* Education Section */}
      <div className=" p-4">
        <Educations />
      </div>
    </div>
  );
}

export default App;
