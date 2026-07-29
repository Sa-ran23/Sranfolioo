import { useState, useEffect } from 'react';
import './Css/ProjectsAnimations.css';
import ProjectCardBody from './ProjectCardBody';
import { Project_data } from '../projects_file.js';

const BATCH = 3; // how many cards to reveal per click

const PROJECT_CARD_BASE =
  'project-card w-full overflow-hidden rounded-lg border border-border-soft bg-bg-card ' +
  'transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.36)]';


function Projects() {
  const [revealed, setRevealed] = useState([]); // ids that have been revealed via the button

  let hiddenProjects = Project_data.filter((p, index) =>{ 
          return (p.initiallyHidden && !revealed.includes(p.id));
  });


  function handleViewMore() {
    const toReveal = hiddenProjects.slice(0, BATCH).map(p => p.id);
    setRevealed(prev => [...prev, ...toReveal]);
  }

  const noMoreHidden = hiddenProjects.length === 0;

  return (
    <section id="projects" className="border-b border-border-soft py-16 max-[640px]:py-12">
      <div className="mx-auto max-w-[1100px] px-[1.2rem] max-[640px]:px-[0.8rem]">
        <h2 className="section-title mb-[1.3rem] text-[1.6rem] tracking-[0.02em]">My Projects</h2>

        <div
          className="grid grid-cols-3 gap-[1.3rem] max-[900px]:grid-cols-3 max-[600px]:grid-cols-1"
          id="projects-grid"
        >
          {Project_data.map(project => {
            const isRevealed = revealed.includes(project.id);
            const isHidden = project.initiallyHidden && !isRevealed;
            const classNames = [
              PROJECT_CARD_BASE,
              'group',
              isHidden ? 'project-hidden hidden' : '',
              isRevealed ? 'project-revealed' : '',
            ].filter(Boolean).join(' ');

            return (
              <article className={classNames} key={project.id}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <ProjectCardBody project={project} />
                  </a>
                ) : (
                  <ProjectCardBody project={project} />
                )}
              </article>
            );
          })}
        </div>

        {/* View More button — hidden automatically if no hidden cards exist */}
        <div
          className="mt-[1.6rem] flex justify-center"
          id="view-more-wrap"
          style={noMoreHidden ? { display: 'none' } : undefined}
        >
          <button
            id="btn-view-more"
            onClick={handleViewMore}
            className="group flex items-center gap-[0.45rem] rounded-full border border-border-soft bg-transparent
                       px-8 py-[0.65rem] font-poppins text-[0.85rem] font-medium text-text-main
                       transition-[border-color,transform,box-shadow] duration-200
                       hover:-translate-y-[1px] hover:border-accent hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          >
            View More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:translate-y-[2px]"
            >
              <path d="M7 2.5V11.5M7 11.5L3 7.5M7 11.5L11 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


export default Projects;