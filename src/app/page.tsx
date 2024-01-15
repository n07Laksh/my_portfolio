import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Qualification from "./Components/Qualification";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
