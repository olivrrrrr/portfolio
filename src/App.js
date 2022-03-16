import About from "./components /About/About.js";
import Projects from "./components /Projects/Projects";
import Landing from "./components /Landing/Landing"
import Blog from "./components /Blogs/Blog.js";

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Projects/>
      <Blog/>
    </div>
  );
}

export default App;
