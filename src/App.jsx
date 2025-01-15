import "./App.css";
import AboutMe from "./component/AboutMe";
import AboutSection from "./component/AboutSection";
import Educations from "./component/Educations";
import Imagesection from "./component/Imagesection";
import Skills from "./component/Skills";
import WorkExperience from "./component/WorkExperience";
function App() {
  return (
    <div className="text-xl w-full md:w-3/4 lg:w-2/3 mx-auto">
      <div className="flex flex-col md:flex-row my-8">
        {/* About Section */}
        <AboutSection />
        {/* Image Section */}
        <Imagesection />
      </div>

      {/* About Me Section */}
      <div className="">
        <AboutMe />
        {/* Skills */}
        <Skills />
        <WorkExperience />
      </div>
      <div className="-mt-4 mb-2 p-4">
        <Educations />
      </div>
    </div>
  );
}
export default App;
