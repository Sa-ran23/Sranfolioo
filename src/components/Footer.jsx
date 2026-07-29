
function Footer() {
  return (
    <footer className="bg-[#141414] py-[1.1rem]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-center px-[1.2rem] text-[0.8rem] text-text-muted max-[640px]:items-start max-[640px]:px-[0.8rem]">
        <p>© <span id="year">{new Date().getFullYear()}</span> Sarankumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;