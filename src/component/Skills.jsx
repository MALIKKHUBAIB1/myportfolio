import Heading from "../utils/Heading";

function Skills() {
  const skills = [
    { name: "HTML", category: "Languages" },
    { name: "CSS", category: "Languages" },
    { name: "Javascript", category: "Languages" },
    { name: "React.js", category: "Frameworks/Libraries" },
    { name: "Node.js", category: "Frameworks/Libraries" },
    { name: "Express.js", category: "Frameworks/Libraries" },
    { name: "Redux.js", category: "Frameworks/Libraries" },
    { name: "Next.js", category: "Frameworks/Libraries" },
    { name: "Redux Toolkit", category: "Frameworks/Libraries" },
    { name: "TypeScript", category: "Languages" },
    { name: "MongoDb", category: "DataBase" },
    { name: "Tailwind ", category: "Css" },

    { name: "AWS", category: "Cloud" },
    { name: "Linux", category: "Os" },
  ];
  return (
    <>
      <Heading content={"Skills"} />
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => {
          return (
            <div
              key={i}
              className="bg-slate-300 p-3 rounded-lg text-black shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
