import Header from "../Header/Header";
import Home from "@/sections/home/Home";
import AboutMe from "@/sections/about/aboutMe";

export default function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
    </div>
  );
}
