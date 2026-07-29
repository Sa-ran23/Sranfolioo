import React from "../images/React-icon.png";
import java from "../images/java.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import php from "../images/php.png";
import sql from "../images/sql.png";
import Tailwind from "../images/Tailwind.png";
import mongodb from "../images/mongodb.png";
import { useEffect, useRef, useState } from "react";

function Skills() {

  const langCardRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = langCardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.unobserve(el); // runs only once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="border-y border-border-soft py-16 max-[640px]:py-12">
      <div className="mx-auto max-w-[1100px] px-[1.2rem] max-[640px]:px-[0.8rem]">
        <h2 className="section-title mb-[1.3rem] text-[1.6rem] tracking-[0.02em]">My Skills</h2>

        <ul className="skills__icons grid grid-cols-[repeat(5,140px)] auto-rows-[64px] items-center justify-center gap-x-[18px] gap-y-4 p-8 max-[650px]:grid-cols-[repeat(5,50px)] max-[650px]:auto-rows-[56px] max-[650px]:gap-[10px]"
        >
           <li className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(90,108,255,0.25)] bg-[rgba(90,108,255,0.12)] shadow-[0_4px_14px_rgba(90,108,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(90,108,255,0.20)] hover:border-[rgba(90,108,255,0.50)] hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] even:bg-[rgba(53,199,255,0.10)] even:border-[rgba(53,199,255,0.22)] even:shadow-[0_4px_14px_rgba(53,199,255,0.10)] even:hover:bg-[rgba(53,199,255,0.18)] even:hover:border-[rgba(53,199,255,0.45)] even:hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={React} alt="React" style={{ width: '70%', height: '70%' }} className="block object-contain" />
          </li>
          <li className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(90,108,255,0.25)] bg-[rgba(90,108,255,0.12)] shadow-[0_4px_14px_rgba(90,108,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(90,108,255,0.20)] hover:border-[rgba(90,108,255,0.50)] hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] even:bg-[rgba(53,199,255,0.10)] even:border-[rgba(53,199,255,0.22)] even:shadow-[0_4px_14px_rgba(53,199,255,0.10)] even:hover:bg-[rgba(53,199,255,0.18)] even:hover:border-[rgba(53,199,255,0.45)] even:hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={java} alt="Java" style={{ width: '75%', height: '75%' }} className="block object-contain" />
          </li>
          <li className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(90,108,255,0.25)] bg-[rgba(90,108,255,0.12)] shadow-[0_4px_14px_rgba(90,108,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(90,108,255,0.20)] hover:border-[rgba(90,108,255,0.50)] hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] even:bg-[rgba(53,199,255,0.10)] even:border-[rgba(53,199,255,0.22)] even:shadow-[0_4px_14px_rgba(53,199,255,0.10)] even:hover:bg-[rgba(53,199,255,0.18)] even:hover:border-[rgba(53,199,255,0.45)] even:hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={html} alt="HTML" style={{ width: '83%', height: '83%' }} className="block object-contain" />
          </li>
          <li className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(90,108,255,0.25)] bg-[rgba(90,108,255,0.12)] shadow-[0_4px_14px_rgba(90,108,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(90,108,255,0.20)] hover:border-[rgba(90,108,255,0.50)] hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] even:bg-[rgba(53,199,255,0.10)] even:border-[rgba(53,199,255,0.22)] even:shadow-[0_4px_14px_rgba(53,199,255,0.10)] even:hover:bg-[rgba(53,199,255,0.18)] even:hover:border-[rgba(53,199,255,0.45)] even:hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={css} alt="CSS" style={{ width: '56%', height: '56%' }} className="block object-contain" />
          </li>
          <li className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(90,108,255,0.25)] bg-[rgba(90,108,255,0.12)] shadow-[0_4px_14px_rgba(90,108,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(90,108,255,0.20)] hover:border-[rgba(90,108,255,0.50)] hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] even:bg-[rgba(53,199,255,0.10)] even:border-[rgba(53,199,255,0.22)] even:shadow-[0_4px_14px_rgba(53,199,255,0.10)] even:hover:bg-[rgba(53,199,255,0.18)] even:hover:border-[rgba(53,199,255,0.45)] even:hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={js} alt="JavaScript" style={{ width: '64%', height: '64%' }} className="block object-contain" />
          </li>
          <li className="ml-[85px] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(53,199,255,0.22)] bg-[rgba(53,199,255,0.10)] shadow-[0_4px_14px_rgba(53,199,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(53,199,255,0.18)] hover:border-[rgba(53,199,255,0.45)] hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] even:bg-[rgba(90,108,255,0.12)] even:border-[rgba(90,108,255,0.25)] even:shadow-[0_4px_14px_rgba(90,108,255,0.10)] even:hover:bg-[rgba(90,108,255,0.20)] even:hover:border-[rgba(90,108,255,0.50)] even:hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] max-[650px]:ml-8 max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={php} alt="php" style={{ width: '80%', height: '80%' }} className="block object-contain" />
          </li>
          <li className="ml-[85px] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(53,199,255,0.22)] bg-[rgba(53,199,255,0.10)] shadow-[0_4px_14px_rgba(53,199,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(53,199,255,0.18)] hover:border-[rgba(53,199,255,0.45)] hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] even:bg-[rgba(90,108,255,0.12)] even:border-[rgba(90,108,255,0.25)] even:shadow-[0_4px_14px_rgba(90,108,255,0.10)] even:hover:bg-[rgba(90,108,255,0.20)] even:hover:border-[rgba(90,108,255,0.50)] even:hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] max-[650px]:ml-8 max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={sql} alt="sql" style={{ width: '87%', height: '64%' }} className="block object-contain" />
          </li>
          <li className="ml-[85px] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(53,199,255,0.22)] bg-[rgba(53,199,255,0.10)] shadow-[0_4px_14px_rgba(53,199,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(53,199,255,0.18)] hover:border-[rgba(53,199,255,0.45)] hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] even:bg-[rgba(90,108,255,0.12)] even:border-[rgba(90,108,255,0.25)] even:shadow-[0_4px_14px_rgba(90,108,255,0.10)] even:hover:bg-[rgba(90,108,255,0.20)] even:hover:border-[rgba(90,108,255,0.50)] even:hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] max-[650px]:ml-8 max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={Tailwind} alt="Tailwind" style={{ width: '120%', height: '47%' }} className="block object-contain" />
          </li>
          <li className="ml-[85px] flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[rgba(53,199,255,0.22)] bg-[rgba(53,199,255,0.10)] shadow-[0_4px_14px_rgba(53,199,255,0.10)] transition-[transform,box-shadow,background,border-color] duration-200 ease-in-out hover:-translate-y-1.5 hover:scale-[1.06] hover:bg-[rgba(53,199,255,0.18)] hover:border-[rgba(53,199,255,0.45)] hover:shadow-[0_12px_28px_rgba(53,199,255,0.20)] even:bg-[rgba(90,108,255,0.12)] even:border-[rgba(90,108,255,0.25)] even:shadow-[0_4px_14px_rgba(90,108,255,0.10)] even:hover:bg-[rgba(90,108,255,0.20)] even:hover:border-[rgba(90,108,255,0.50)] even:hover:shadow-[0_12px_28px_rgba(90,108,255,0.22)] max-[650px]:ml-8 max-[650px]:h-[43px] max-[650px]:w-[43px]">
            <img src={mongodb} alt="mongodb" style={{ width: '65%', height: '64%' }} className="block object-contain" />
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
          {/* Language */}
          <div
            ref={langCardRef}
            className="lang-card rounded-lg border border-border-soft bg-bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.36)]"
          >
            <h3 className="mb-[1.3rem] text-base">Language</h3>

            <div>
              <div className="mb-[0.3rem] flex justify-between text-[0.8rem]">
                <span className="font-medium">Tamil</span>
                <span className="text-[0.75rem] text-text-muted">Native</span>
              </div>
              <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#333333]">
                <div
                  className="h-full rounded-[inherit] bg-gradient-to-r from-accent to-accent2 transition-[width] duration-[1200ms] ease-out"
                  style={{ width: barsVisible ? '100%' : '0%' }}
                ></div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-[0.3rem] flex justify-between text-[0.8rem]">
                <span className="font-medium">English</span>
                <span className="text-[0.75rem] text-text-muted">Intermediate</span>
              </div>
              <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#333333]">
                <div
                  className="h-full rounded-[inherit] bg-gradient-to-r from-accent to-accent2 transition-[width] duration-[1200ms] ease-out"
                  style={{ width: barsVisible ? '70%' : '0%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Studies */}
          <div className="studies-card rounded-lg border border-border-soft bg-bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.36)]">
            <h3 className="mb-[1.3rem] text-base">Studies</h3>

            <div className="flex items-start gap-[0.9rem]">
              <div className="flex h-[42px] min-w-[42px] items-center justify-center rounded-full text-[0.65rem]" style={{ background: 'radial-gradient(circle at 30% 20%, #ffffff55, #1925ff 45%, #1e90ff 80%)' }} >
                BCA
              </div>
              <div>
                <p className="text-[0.9rem]">Bachelor of Computer Applications</p>
                <p className="mt-[0.15rem] text-[0.8rem] text-text-muted">
                  Erode Arts and Science College( Bharathiar University )
                </p>
                <p className="mt-[0.15rem] text-[0.75rem] text-text-muted">2021 – 2024  |  CGPA - 07.435</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;