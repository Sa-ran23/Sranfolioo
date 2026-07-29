import github from "../images/github.png";
import instagram from "../images/instagram.png";
import x from "../images/x.png";
import linkedin from "../images/linkedin.png";

function Contact() {
  return (
    <section id="contact" className="pb-14 pt-16 max-[640px]:py-12">
      <div className="mx-auto max-w-[1100px] px-[1.2rem] max-[640px]:px-[0.8rem]">
        <div className="contact__card rounded-[26px] border border-border-soft bg-[#202020] px-[1.8rem] py-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.36)]">
          <h2 className="section-title mb-[1.3rem] text-[1.6rem] tracking-[0.02em] text-white">Contact</h2>

          <p className="mb-4 text-[0.9rem] text-text-muted">
            Reach out anytime—I'm always open to meeting new people and ideas.
          </p>

          <ul className="text-[0.85rem]">
            <li><span className="font-medium text-text-main">Email:</span> sarankumar2603@gmail.com</li>
            <li className="mt-[0.4rem]"><span className="font-medium text-text-main">Phone:</span> +91 90946 56457</li>
            <li className="mt-[0.4rem]"><span className="font-medium text-text-main">Location:</span> Tiruppur, Tamil Nadu, India</li>
          </ul>
          <li className="mt-[10px] flex list-none items-center gap-[10px]">
            <a href="https://github.com/Sa-ran23">
              <img src={github} alt="GitHub" className="h-[26px] w-[26px] cursor-pointer object-contain transition-transform duration-200 hover:scale-[1.12] hover:opacity-85" />
            </a>
            <a href="https://www.instagram.com/s__ran_?igsh=MThtZ2pvOWRzN2g5Zg==">
              <img src={instagram} alt="Instagram" className="h-[26px] w-[26px] cursor-pointer object-contain transition-transform duration-200 hover:scale-[1.12] hover:opacity-85" />
            </a>
            <a href="https://x.com/DevilSaran2?t=a3n0e6IpC3FIAPakXAuJUQ&s=09">
              <img src={x} alt="X (Twitter)" className="h-[26px] w-[26px] cursor-pointer object-contain transition-transform duration-200 hover:scale-[1.12] hover:opacity-85" />
            </a>
            <a href="https://www.linkedin.com/in/saran-kumar-4a8722259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={linkedin} alt="LinkedIn" className="h-[26px] w-[26px] cursor-pointer object-contain transition-transform duration-200 hover:scale-[1.12] hover:opacity-85" />
            </a>
          </li>
        </div>
      </div>
    </section>
  );
}

export default Contact;