import LinkSection from "./LinkSection";
import About from "./About";
import Adress from "./Adress";
function AboutSection() {
  return (
    <>
      <div className="w-11/12 text-justify p-4 flex-grow">
        <About />
        <LinkSection />
        <Adress />
      </div>
    </>
  );
}

export default AboutSection;
