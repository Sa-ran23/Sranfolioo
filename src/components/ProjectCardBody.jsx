import './Css/ProjectsAnimations.css';
import { useState } from 'react';


const GITHUB_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function ProjectCardBody({ project }) {
  const [expanded, setExpanded] = useState({});
  const isExpanded = !!expanded[project.id];

  function toggleReadMore(e) {
    // Stop this click from bubbling up to the wrapping <a href={project.href}>,
    // which is what was triggering navigation instead of just expanding the text.
    e.preventDefault();
    e.stopPropagation();
    setExpanded(prev => ({ ...prev, [project.id]: !prev[project.id] }));
  }

  return (
    <>
      <div className="block aspect-video w-full overflow-hidden bg-[#232323]">
        <img
          src={project.thumb}
          alt={project.thumbAlt}
          className="block h-full w-full object-cover object-center transition-transform duration-[350ms] ease-in-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex min-h-[200px] flex-col px-5 pb-[1.1rem] pt-4">
        <div className="mb-[0.3rem] flex flex-wrap items-center justify-between gap-2 max-[380px]:flex-col max-[380px]:items-start">
          <h3 className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[0.95rem] max-[380px]:whitespace-normal">
            {project.title}
          </h3>
          
           <a href={project.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-[0.3rem] whitespace-nowrap rounded-full border
                       border-border-soft py-[0.2rem] pl-[0.45rem] pr-[0.65rem] text-[0.75rem] text-text-muted
                       transition-colors duration-[180ms] hover:border-accent hover:bg-[rgba(90,108,255,0.07)] hover:text-text-main"
          >
            {project.github.icon && GITHUB_ICON}
            {project.github.text}
          </a>
        </div>

        <p className={`mb-[0.4rem] flex-1 text-[0.85rem] text-text-muted ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {isExpanded ? project.text : project.text?.slice(0, 100)}

          {project.text?.length > 100 && (
            <span
              onClick={toggleReadMore}
              className="readMore !ml-1 cursor-pointer font-semibold text-[#5a6cff] hover:text-[#5a6cff]"
            >
              {isExpanded ? ' Read Less' : ' Read More'}
            </span>
          )}
        </p>

        <p className="mt-auto text-[0.8rem] text-text-muted">{project.stack}</p>
      </div>
    </>
  );
}


export default ProjectCardBody;