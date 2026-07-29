import './Css/HeaderAnimations.css';
import sf_logos from "../images/SF_logos.png";

const navLinkClasses =
  "relative text-text-muted transition-colors hover:text-text-main " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 " +
  "after:bg-gradient-to-r after:from-accent after:to-accent2 after:transition-[width] after:duration-200 " +
  "hover:after:w-full";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[#151515ee] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-[1.2rem] py-[0.8rem] min-[769px]:py-[1.15rem] max-[640px]:px-[0.8rem]">
        {/* CHANGE 1: Logo PNG image added before logo text */}
        <div className="flex items-center gap-[0.45rem] text-base font-semibold">
          <img
            src={sf_logos}
            alt="Sranfolio logo"
            className="h-7 w-7 rounded-[5px] object-contain min-[769px]:h-8 min-[769px]:w-8"
          />
          Sranfolio
        </div>

        <input type="checkbox" id="nav-toggle" className="nav-toggle peer hidden" />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label relative hidden h-6 w-8 cursor-pointer max-[768px]:block"
        >
          <span></span>
        </label>

        <nav
          className="max-[768px]:absolute max-[768px]:left-0 max-[768px]:top-full max-[768px]:hidden
                     max-[768px]:w-full max-[768px]:border-t max-[768px]:border-border-soft
                     max-[768px]:bg-bg-main max-[768px]:peer-checked:block"
        >
          <ul
            className="flex gap-[1.4rem] text-[0.85rem] max-[900px]:gap-[0.9rem]
                       max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:p-4"
          >
            <li><a href="#hero" className={navLinkClasses}>Home</a></li>
            <li><a href="#skills" className={navLinkClasses}>Skills</a></li>
            <li><a href="#experience" className={navLinkClasses}>Experience</a></li>
            <li><a href="#projects" className={navLinkClasses}>Projects</a></li>
            <li><a href="#contact" className={navLinkClasses}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;