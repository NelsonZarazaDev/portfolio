import AboutMe from "@/sections/about/AboutMe";
import Header from "../Header/Header";
import Home from "@/sections/home/Home";
import Project from "@/sections/projects/Project";
import Stack from "@/sections/stack/Stack";
import Contact from "@/sections/contact/Contact";
import Footer from "../Footer/Footer";
import { usePortfolioMotion } from "@/hooks/usePortfolioMotion";

export default function Layout() {
  usePortfolioMotion();
  return (
    <div className="overflow-x-clip bg-[#fbfbfd] text-slate-950">
      <Header />
      <Home />
      <AboutMe />
      <Project />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
