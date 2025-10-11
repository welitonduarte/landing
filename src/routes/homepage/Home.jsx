import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Expertise from "./Expertise.jsx";
import Hero from "./hero/Hero.jsx";
import Mission from "./Mission.jsx";
import Testimonials from "./Testimonials.jsx";

export default function Home() {
  return (
    <>
      <div className="heroWrapper">
        <Hero />
      </div>
      <div className="main">
        <Mission />
        <Expertise />
        <About />
        <Testimonials/>
        <Contact />
      </div>
    </>
  );
}
