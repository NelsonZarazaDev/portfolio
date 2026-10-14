import Header from "../Header/Header";
import Home from "@/sections/home/Home";
import AboutMe from "@/sections/about/AboutMe";
import Project from "@/sections/projects/Project";

export default function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Project />
    </div>
  );
}
