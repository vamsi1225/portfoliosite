import AboutIntro from "../components/blocks/AboutIntro";
import Contact from "../components/blocks/Contact";
import Interests from "../components/blocks/Interests";
import ProfileHeader from "../components/blocks/ProfileHeader";
import WorkExperience from "../components/blocks/WorkExperience";

export default function About() {
  return (
    <div className="bg-background text-foreground max-w-5xl mx-auto">
      <ProfileHeader />
      <AboutIntro />
      <WorkExperience />
      <Interests/>
      <Contact/>
    </div>
  );
}


