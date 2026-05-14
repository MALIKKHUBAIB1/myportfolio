import Heading from "../utils/Heading";

function AboutMe() {
  return (
    <div className="">
      <Heading content={"About Me"} />
      <div className="text-justify text-base sm:text-lg md:text-xl lg:text-xl ">
        I am a Full Stack Engineer with expertise in building scalable and
        high-performance web applications. I specialize in modern technologies
        including React, React Native, Node.js, Express, MongoDB, and AWS. I
        develop robust solutions with a strong foundation in Data Structures and
        Algorithms, ensuring optimal performance and efficiency. My approach
        emphasizes writing clean, maintainable code and implementing best
        practices across the full development lifecycle. I'm committed to
        delivering impactful, production-ready applications and continuously
        expanding my technical expertise in both frontend and backend
        development.
      </div>
    </div>
  );
}

export default AboutMe;
