import HeroIntro from "./components/blocks/HeroIntro";
import Projects from "./components/blocks/Projects";
import Skills from "./components/blocks/Skills";
import DummySection from "./pages/test";

export default function Home() {
  return (
    <div>
      <HeroIntro />
      <Projects />
      <Skills/>

      {/* <DummySection /> */}
    </div>
  );
}