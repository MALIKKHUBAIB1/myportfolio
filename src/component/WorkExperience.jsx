import Heading from "../utils/Heading";

function WorkExperience() {
  const projects = [
    {
      id: 1,
      name: "Event Management App",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed a web app for managing events, including features for searching and adding events.",
        "Implemented a backend to handle event data and user interactions with allocated budget.",
        "Designed a user-friendly interface for seamless event creation and management.",
      ],
    },
    {
      id: 2,
      name: "Food Order App",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed a web application for ordering food with features for browsing menus, adding items to a cart, and placing orders.",
      ],
    },
    {
      id: 3,
      name: "SpaceX Info",
      technologies: ["React.js", "Bootstrap", "SpaceX API"],
      description: [
        "Developed a web app to display SpaceX launch data with a responsive design.",
        "Integrated SpaceX API for real-time launch information and rocket details.",
      ],
    },
    {
      id: 4,
      name: "NetflixGPT Application",
      technologies: [
        "React.js",
        "Firebase Authentication",
        "Movie Database API",
      ],
      description: [
        "Developed a movie search application that allows users to find and explore movies by searching titles.",
        "The app displays detailed movie information, including ratings, release dates, genres, and more.",
        "Integrated Firebase Authentication for secure user login and registration.",
      ],
    },
  ];

  return (
    <div className="w-full mt-10">
      <Heading content={"Project"} />
      <div className="w-full">
        {projects.map((project) => {
          return (
            <div
              className="bg-slate-700 h-auto rounded-md p-6 relative shadow-lg mb-4 w-full"
              key={project.id}
            >
              {/* Top-Right Button Link */}
              <a
                href="#"
                className="absolute top-2 right-2 text-gray-200 text-sm px-3 py-1 rounded-md hover:bg-gray-600"
              >
                View Details
              </a>

              {/* Project Details */}
              <h1 className="font-bold text-xl sm:text-2xl text-white">
                {project.name}
              </h1>
              <h2 className="font-bold my-2 text-gray-300 text-sm sm:text-base">
                Tech Stack: {project.technologies.join(", ")}
              </h2>
              <div className="text-gray-300 text-sm sm:text-base">
                {project.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
