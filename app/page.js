import Hero from "./components/hero";
import About from "./components/about";
import WhoWeAre from "./components/whoweare";
import Project from "./components/project";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="bg-[#19191b] text-gray-200">
      <Header />
      <Hero />
      <div className="mx-auto max-w-6xl px-4 py-36 pb-20">
        <About />
        <WhoWeAre />
        <Project />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}
