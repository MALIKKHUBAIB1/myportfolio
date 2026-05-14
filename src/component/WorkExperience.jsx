import Heading from "../utils/Heading";

function WorkExperience() {
  const projects = [
    {
      id: 1,
      name: "Abhiwan Technology",
      technologies: ["Next.js", "Tailwind CSS", "SEO Optimization", "Performance Optimization"],
      description: [
        "Architected and built a full-featured web application from scratch using modern frontend technologies with emphasis on high performance, scalability, and SEO excellence.",
        "Implemented advanced SEO strategies including programmatic SEO, dynamic metadata generation, structured data/schema markup, canonical URL handling, and search-engine-optimized routing to maximize discoverability and SERP rankings.",
        "Optimized Core Web Vitals and overall performance metrics: improved LCP, reduced load times, achieved excellent Lighthouse scores through image optimization, lazy loading, code splitting, and intelligent caching strategies.",
        "Developed scalable component architecture with smooth animations, comprehensive accessibility improvements, and fully responsive layouts across all devices using Next.js and Tailwind CSS.",
      ],
      link : "https://abhiwan.com/",
    },
    {
      id: 2,
      name: "Chetna Manch - News Portal",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "API Integration"],
      description: [
        "Developed a high-traffic Hindi news portal serving UP-NCR region with comprehensive news coverage across multiple categories including national, regional, sports, entertainment, lifestyle, and government schemes.",
        "Implemented dynamic content management system with category-based news routing, real-time article updates, and efficient data retrieval from multiple news sources through API integrations.",
        "Optimized web portal for SEO and discoverability with structured data markup, meta tags optimization, and category-based URL structure to improve SERP rankings and organic traffic.",
        "Built responsive UI with adaptive layouts for mobile, tablet, and desktop devices; implemented infinite scroll, bookmarking features, and user engagement metrics for enhanced user experience.",
      ],
      link : "https://chetnamanch.com/",
    },
    
    {
      id: 3,
      name: "SpaceX Info",
      technologies: ["React.js", "Bootstrap", "SpaceX API"],
      description: [
        "Developed a web app to display SpaceX launch data with a responsive design.",
        "Integrated SpaceX API for real-time launch information and rocket details.",
      ],
      link : "https://sapcexx.netlify.app/",

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
      link : "#",
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
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
