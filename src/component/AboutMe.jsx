import Heading from "../utils/Heading";

function AboutMe() {
  return (
    <div className="">
      <Heading content={"About Me"} />
      <div className="text-justify text-base sm:text-lg md:text-xl lg:text-xl ">
        I am a Junior Full Stack Engineer passionate about building scalable web
        applications. I have experience with technologies like React, Node.js,
        Express, MongoDB, and AWS. Along with development, I focus on improving
        my problem-solving skills using Data Structures and Algorithms. I enjoy
        writing clean, efficient code and constantly aim to improve my skills to
        create better solutions. My goal is to grow in both development and
        problem-solving to build impactful and high-performance applications.
      </div>
    </div>
  );
}

export default AboutMe;
