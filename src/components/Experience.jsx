import company from "../images/company.png";

function Experience() {
  
  return (
    <section id="experience" className="border-b border-border-soft py-16 max-[640px]:py-12">
      <div className="mx-auto max-w-[1100px] px-[1.2rem] max-[640px]:px-[0.8rem]">
        <h2 className="section-title mb-[1.3rem] text-[1.6rem] tracking-[0.02em]">My Work Experience</h2>

        <div className="experience__card mt-4 grid w-[46%] min-w-[542px] grid-cols-[220px_minmax(0,1fr)] gap-6  rounded-xl border border-border-soft bg-bg-card p-6 transition-[transform,box-shadow]  duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.36)]  max-[900px]:ml-[19px] max-[900px]:w-[89%] max-[900px]:min-w-[250px] max-[900px]:grid-cols-[minmax(0,1fr)]">
          <div>
            {/* Replace with an illustration / company logo */}
            <div className="flex aspect-square w-full items-center justify-center rounded-[14px] text-[0.8rem]" style={{ background: 'radial-gradient(circle at 30% 20%, #ffffff55, #1925ff 45%, #1e90ff 80%)' }}>
              <img src={company} style={{ width: '150px', height: '150px' }} />
            </div>
          </div>
          <div>
            <h3 className="mb-[0.2rem] text-base">AV7 SCM_HO</h3>
            <p className="mb-[0.7rem] text-[0.85rem] text-text-muted">Junior Developer</p>
            <p className="text-[0.9rem] text-text-muted">I worked on internal web apps using PHP and JavaScript from 2025–2025, where I gained 8 months of experience building
              clean interfaces and reliable backend features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;