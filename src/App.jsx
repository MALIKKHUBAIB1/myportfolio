import "./App.css";
import About from "./component/About";

function App() {
  return (
    <>
      <div className="text-xl w-[60%] m-auto flex">
        {/* About Section */}
        <div className="w-8/12 p-4 text-justify">
          <About />
        </div>

        {/* Image Section */}
        <div className="w-4/12 p-4">
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-full h-[60%] rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default App;
