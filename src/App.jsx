import { Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Nav from "./components/nav/Nav";
import ProjectList from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import Art from "./pages/art/Art";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import "./app.css"

function App() {
    return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="/art" element={<Art />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

// const App = () => {
//   return (
//     <>
//     {/* <Routes>
//       <Route path="/about" element={<Contact />} />
//     </Routes> */}
//     <div>
//   <Intro/>
//   <About/>
//   <ExamplesList />
//   <Contact/>
//   </div>
//   </>
//   );
// };

export default App;