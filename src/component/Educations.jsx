import Heading from "../utils/Heading";

function Educations() {
  return (
    <div className="w-full -mt-7">
      <Heading content={"Education"} />
      <div className="bg-slate-700 p-6 rounded-xl shadow-lg my-4 relative overflow-hidden w-full">
        {/* Top-Right Button Link */}
        <span className="absolute top-4 right-4 text-gray-200 text-sm bg-slate-600 px-4 py-2 rounded-full">
          2022-25
        </span>

        {/* Project Details */}
        <h1 className="font-bold text-2xl sm:text-3xl text-white mb-2">
          Bachelor of Technology
        </h1>
        <div className="text-base sm:text-lg text-gray-300 mb-2">
          Computer Science Engineering
        </div>
        <div className="text-base sm:text-lg text-gray-300 mb-2">
          Guru Govind Singh Indraprastha University
        </div>
        <div className="flex items-center justify-between text-sm sm:text-base text-gray-400 mt-4">
          <h2 className="font-semibold">CGPA: 8.1</h2>
        </div>
      </div>
    </div>
  );
}

export default Educations;
