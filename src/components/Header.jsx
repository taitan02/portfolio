import myCV from "../assets/pdf/Fresher-Frontend_NguyenTanTai.pdf";

function Header() {
  return (
    <div className="fixed top-0 inset-x-0 h-20 bg-[#0a192f] z-20">
      <div className="flex justify-between items-center h-full">
        <div>logo</div>
        <div className="hidden md:flex text-white gap-x-5 pr-4">
          <a href="/" className="px-4 py-2">
            About
          </a>
          <div className="px-4 py-2">Experience</div>
          <div className="px-4 py-2">Projects</div>
          <div className="px-4 py-2">Contact</div>
          <a
            href={myCV}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border-2 rounded-lg text-primary border-primary hover:bg-[#133040] duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
