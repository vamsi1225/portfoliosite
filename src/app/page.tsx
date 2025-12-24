import HeroIntro from "./components/blocks/HeroIntro";
import Projects from "./components/blocks/Projects";
import Skills from "./components/blocks/Skills";
import Certifications from "./components/blocks/Certifications";

export default function Home() {
  return (
    <div>
      <HeroIntro />
      <Projects />
      <Certifications />
      <Skills/>
    </div>
  );
}