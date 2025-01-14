import LinkSection from "./LinkSection";
import About from "./About";

function AboutSection() {
  return (
    <>
      <div className="w-8/12 text-justify p-4">
        <About />
        <LinkSection />
      </div>
    </>
  );
}

export default AboutSection;
