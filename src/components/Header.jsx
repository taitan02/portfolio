import myCV from "../assets/pdf/Fresher-Frontend_NguyenTanTai.pdf";
import { BsBarChart } from "react-icons/bs";
function Header({ showSidebar }) {
  return (
    <div className="fixed top-0 inset-x-0 h-20 bg-[#0a192f] z-20">
      <div className="flex justify-between items-center h-full px-4">
        <div></div>
        <div className="hidden md:flex text-white gap-x-5 pr-4">
          <a href="#about" className="px-4 py-2 hover:text-primary hover:scale-110 duration-200">
            About
          </a>
          <a href="#project" className="px-4 py-2 hover:text-primary hover:scale-110 duration-200">
            Projects
          </a>
          <a href="#contact" className="px-4 py-2 hover:text-primary hover:scale-110 duration-200">
            Contact
          </a>
          <a
            href={myCV}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border-2 rounded-lg text-primary border-primary hover:bg-[#133040] duration-500"
          >
            Resume
          </a>
        </div>
        <BsBarChart
          size={45}
          className="md:hidden text-primary -rotate-90 hover:scale-110 duration-500 hover:cursor-pointer"
          onClick={showSidebar}
        />
      </div>
    </div>
  );
}

export default Header;
