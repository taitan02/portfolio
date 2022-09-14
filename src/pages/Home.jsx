import Header from "../components/Header";
import Footer from "../components/Footer";
import { infor } from "../information";
import myPic from "../assets/images/myPic.jpg";
import matchingGame from "../assets/images/matching-game.png";
import { AiFillCaretRight, AiFillGithub } from "react-icons/ai";
function Home() {
  return (
    <div className="bg-[#0a192f] pt-20">
      <Header />
      <div className="py-20">
        {/**
         * @description Introduce section
         */}
        <div className="container flex flex-col lg:flex-row px-2 md:px-14">
          <div className="flex flex-col gap-y-4 text-white">
            <h3 className="text-primary text-lg">Hi, my name is</h3>
            <h1 className="text-7xl font-bold text-[#ccd6f6]">
              Nguyen Tan Tai
            </h1>
            <h3 className="text-3xl pt-5 text-[#8892b0] md:max-w-5xl">
              I'm a <span className="text-[#ffe100]">Front-end developer</span>.
              This is my portfolio, where I share projects i've been working on
            </h3>
          </div>
          <div>Hình</div>
        </div>
        {/**
         * @description About me section
         */}
        <div className="py-10 lg:py-32 px-4 md:px-20" id="about">
          <div className="flex items-center gap-x-2 ">
            <div className="min-w-fit">
              <h1 className="text-2xl lg:text-5xl text-primary font-semibold">About me</h1>
            </div>
            <div className="h-[1px] w-full lg:w-1/2 translate-y-1">
              <div className="h-full bg-primary"></div>
            </div>
          </div>
          {/* About me - Content */}
          <div className="flex flex-col lg:flex-row pt-10 space-y-8 items-center space-x-6">
            <div className="flex flex-col space-y-5 text-subText text-xl">
              <h1 className="text-justify">{infor.about}</h1>
              <h1>
                Here are a few technologies I've been working with recently:
              </h1>
              <div className="flex space-x-5">
                <div className="flex flex-col space-y-2">
                  {infor.skills.main.map((program, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <AiFillCaretRight className="text-primary" />
                      <span className="text-sm md:text-lg lg:text-xl">{program}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  {infor.skills.frameworks.map((framework, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <AiFillCaretRight className="text-primary" />
                      <span className="text-sm md:text-lg lg:text-xl">{framework}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  {infor.skills.libraries.map((library, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <AiFillCaretRight className="text-primary" />
                      <span className="text-sm md:text-lg lg:text-xl">{library}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-primary border-[3px] rounded-full max-w-[400px] lg:max-w-none">
              <img
                src={myPic}
                alt="my-pic"
                className="rounded-full -translate-x-4 -translate-y-3 hover:translate-x-0 hover:translate-y-0 duration-1000"
              />
            </div>
          </div>
        </div>
        {/**
         * @description Project section
         */}
        <div className="py-5 md:py-20 px-4 lg:px-20" id="project">
          {/* Title */}
          <div className="flex items-center justify-end gap-x-2 ">
            <div className="h-[1px] w-full lg:w-1/2 translate-y-1">
              <div className="h-full bg-primary"></div>
            </div>
            <div className="min-w-fit">
              <h1 className="text-2xl lg:text-5xl text-primary font-semibold">
                My Projects
              </h1>
            </div>
          </div>
          {/* project content */}
          <div className="py-32">
            <div className="flex flex-col lg:flex-row space-x-5 space-y-5 mx-auto">
              <div className="w-full lg:order-last">
                <img src={matchingGame} alt="matching-game" />
              </div>
              <div>
                <h1 className="inline text-4xl font-bold text-transparent bg-gradient-to-r from-[#e92d5c] to-[#ffb86c] bg-clip-text">
                  Matching game
                </h1>
                <div className="">
                  <div className="relative w-full bg-[#112240] px-4 py-10 text-subText mt-10 mb-5 rounded-xl">
                    <div className="absolute top-0 text-white font-medium border-fuchsia-800 border -translate-y-1/2 px-2 py-[2px]">
                      Description
                    </div>
                    <span className="text-lg">
                      Simply to find all pairs of the same pictures hidden
                    </span>
                  </div>
                </div>
                <h1 className="text-base sm:text-xl font-medium text-subText">
                  Technology: <span className="text-sky-600">React JS </span>
                </h1>
                <div className="flex my-8 items-center space-x-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://taitan02.github.io/matching-game/"
                    className="relative px-10 py-3 bg-gradient-to-r from-[#e92d5c] to-[#ffb86c] rounded-xl group"
                  >
                    <span className="text-lg text-white font-semibold">
                      Let's Play
                    </span>
                    <div className="bg-white absolute w-0 h-full top-0 left-0 rounded-xl -z-10 opacity-40 group-hover:w-full group-hover:z-10 duration-500"></div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/taitan02/matching-game"
                    className="w-14 h-14 hover:scale-125 duration-500"
                  >
                    <AiFillGithub className="text-primary w-full h-full"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
