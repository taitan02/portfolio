import myCV from "../assets/pdf/Fresher-Frontend_NguyenTanTai.pdf";
import { MdOutlineCancelPresentation } from "react-icons/md";
function Sidebar({ onClose,showSidebar }) {
  return (
    <div className="fixed inset-0 bg-slate-500 bg-opacity-40 z-30">
      <div className="absolute right-0 top-0 h-full w-4/5 sm:w-1/3 lg:h-1/5 bg-[#112240] z-50 animate-sidebar_in" >
        <div className="flex justify-end items-center h-20 border-b">
          <MdOutlineCancelPresentation
            size={50}
            className="text-red-600 hover:scale-110 duration-500 hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col text-primary">
          <a
            href="#about"
            className="text-center text-lg py-8 px-4"
            onClick={onClose}
          >
            About
          </a>
          <a
            href="#project"
            className="text-center text-lg py-8 px-4"
            onClick={onClose}
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-center text-lg py-8 px-4"
            onClick={onClose}
          >
            Contact
          </a>
          <div className="text-center text-lg py-8 px-4">
            <a
              href={myCV}
              target="_blank"
              rel="noreferrer"
              className="border py-3 px-10 border-primary hover:bg-[#133040] duration-500"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
