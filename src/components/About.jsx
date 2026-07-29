import profile from "../images/profile.jpg";

function About() {
  return (
    <div className="hero__about-card mx-auto w-[98%] max-w-[1139px]">
      <h2 className="section-title mb-[2rem] text-center text-[1.6rem] font-bold tracking-[0.02em] text-[#35c7ff]">
        About
      </h2>

      <div className="grid grid-cols-[220px_1fr] items-center gap-10 max-[650px]:grid-cols-1 max-[650px]:justify-items-center max-[650px]:gap-6 max-[650px]:text-center">
        <div className="hero__photo-placeholder relative h-[200px] w-[200px] shrink-0 max-[650px]:h-[160px] max-[650px]:w-[160px]">
          {/* decorative offset circle peeking out behind the photo */}
          <div className="absolute left-3 top-3 h-full w-full rounded-full bg-[#35c7ff]"></div>
          <img
            src={profile}
            alt="profile image"
            className="absolute left-0 top-0 h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="about-text">
          <p className="text-[0.95rem] leading-relaxed text-text-muted">
            I am **Sarankumar M**, a BCA graduate with a strong interest in building clean, practical, and user-friendly software solutions. I completed a **Junior Software Developer** course at **CADD Technology**, where I strengthened my foundation in software development and modern programming concepts.
I also have professional experience as a **PHP Developer** at my previous company, where I contributed to both front-end and back-end development for internal company applications. While my career began with PHP, I also have a strong interest in **Java** and **React** and am actively enhancing my skills by building projects and exploring modern development practices.
I enjoy creating efficient, scalable, and user-friendly web applications, and I am always eager to learn new technologies, solve real-world challenges, and grow as a software developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
