import HeroIntro from "./components/blocks/HeroIntro";
import Projects from "./components/blocks/Projects";
import DummySection from "./pages/test";

export default function Home() {
  return (
    <div>
      <HeroIntro />
      <Projects />
      <DummySection />
    </div>
  );
}