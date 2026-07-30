import About from './About.jsx';
import TypingEffect from './TypingEffect.jsx';
import saran_resume from '../Resume/saran-resume.pdf';

function Home() {
  return (
    <section id="hero" className="py-16 text-center max-[640px]:py-12">
      <div className="hero__inner mx-auto max-w-[1100px] px-[1.2rem] pb-[2.5rem] pt-[3rem] max-[640px]:px-[0.8rem]">
        {/* <p className="text-[0.85rem] uppercase tracking-[0.15em] text-text-muted">
          Hi, I'm <span className="text-text-main">Sarankumar</span>
        </p> */}
        < TypingEffect />

        <h1 className="mt-[0.9rem] text-[2.2rem] leading-[1.3] max-[640px]:text-[1.8rem]">
          Java, React &amp; Web<br />Developer
        </h1>

        <p className="mx-auto mt-[0.7rem] max-w-[520px] text-[0.9rem] text-text-muted">
          Developer with PHP experience, now growing in Java and React to build smarter digital experiences.
        </p>

        <div className="mt-[1.4rem] flex justify-center gap-[0.8rem] max-[640px]:flex-col">
          <a href={saran_resume} className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-accent to-accent2 px-[1.4rem] py-[0.65rem] text-[0.85rem] font-medium text-[#050505] shadow-[0_12px_22px_rgba(0,0,0,0.45)] transition-[transform,box-shadow,background,border-color] duration-150 ease-in-out hover:-translate-y-[1px] hover:shadow-[0_16px_30px_rgba(0,0,0,0.55)]" >
            Download CV
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-border-soft bg-transparent px-[1.4rem] py-[0.65rem] text-[0.85rem] font-medium text-text-main transition-[transform,box-shadow,background,border-color] duration-150 ease-in-out hover:border-accent">
            Contact Me
          </a>
        </div>

        <p className="mt-[1.3rem] text-[0.8rem] text-text-muted"></p>
      </div>

      {/* Hero: About & image row */}
      <About />
    </section>
  );
}

export default Home;
