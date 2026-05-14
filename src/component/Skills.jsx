import Heading from "../utils/Heading";

function Skills() {
 const skills = [
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },

  { name: "React.js", category: "Frameworks/Libraries" },
  { name: "Next.js", category: "Frameworks/Libraries" },
  { name: "React Native", category: "Frameworks/Libraries" },
  { name: "Node.js", category: "Frameworks/Libraries" },
  { name: "Express.js", category: "Frameworks/Libraries" },
  { name: "Redux.js", category: "Frameworks/Libraries" },
  { name: "Redux Toolkit", category: "Frameworks/Libraries" },
  { name: "Socket.io", category: "Frameworks/Libraries" },

  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Firebase", category: "Backend/Services" },

  { name: "Tailwind CSS", category: "CSS" },

  { name: "AWS", category: "Cloud" },

  { name: "Linux", category: "OS" },
];

  return (
    <>
      <Heading content={"Skills"} />
      <div className="flex flex-wrap justify-start gap-4">
        {skills.map((skill, i) => {
          return (
            <div
              key={i}
              className="bg-slate-300 p-3 rounded-lg text-black shadow-md hover:shadow-lg transition-shadow duration-200 min-w-max"
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
