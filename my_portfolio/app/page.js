// pages/index.js
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Content from "@/components/Content";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";
import Hackathon from "@/components/Hackathon";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-black text-white"> 
        <section id="content"><Content /></section>
        <section id="about"><About /></section>
        <section id="hackathon"><Hackathon /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}
