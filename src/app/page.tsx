import HeroIntro from "./components/blocks/HeroIntro";
import Projects from "./components/blocks/Projects";
import Skills from "./components/blocks/Skills";

export default function Home() {
  return (
    <div>
      <HeroIntro />
      <Projects />
      <Skills/>
    </div>
  );
}