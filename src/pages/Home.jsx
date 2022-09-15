import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { infor } from "../information";
import myPic from "../assets/images/myPic.jpg";
import matchingGame from "../assets/images/matching-game.png";
import simpleMusic from "../assets/images/simple-music-player.png";
import { AiFillCaretRight, AiFillGithub } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { Fade, Bounce } from "react-reveal";
import { useState } from "react";
function Home() {
  console.log("a");
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-[#0a192f] pt-20">
      <Header showSidebar={() => setShowSidebar(true)} />
      {showSidebar && (
        <Sidebar
          onClose={() => setShowSidebar(false)}
          showSidebar={showSidebar}
        />
      )}
      <div className="pt-20 pb-10">
        {/**
         * @description Introduce section
         */}
        <div className="container flex flex-col lg:flex-row px-2 md:px-14">
          <div className="flex flex-col gap-y-4 text-white">
            <h3 className="text-primary text-lg lg:text-xl">Hi, my name is</h3>
            <h1 className="text-7xl font-bold text-[#ccd6f6]">
              Nguyen Tan Tai
            </h1>
            <h3 className="text-3xl pt-5 text-[#8892b0] md:max-w-5xl">
              I'm a <span className="text-[#ffe100]">Front-end developer</span>.
              This is my portfolio, where I share projects i've been working on
            </h3>
          </div>
          <div></div>
        </div>
        {/**
         * @description About me section
         */}
        <div className="py-10 lg:py-32 px-4 md:px-20" id="about">
          <div className="flex items-center gap-x-2 ">
            <div className="min-w-fit">
              <h1 className="text-2xl lg:text-5xl text-primary font-semibold">
                About me
              </h1>
            </div>
            <div className="h-[1px] w-full lg:w-1/2 translate-y-1">
              <div className="h-full bg-primary"></div>
            </div>
          </div>
          {/* About me - Content */}
          <div className="flex flex-col lg:flex-row pt-10 space-y-8 items-center space-x-6">
            <div className="flex flex-col space-y-5 text-subText text-xl">
              <div>
                <h1 className="text-justify">
                  Hello! My name is{" "}
                  <Bounce left duration={1500}>
                    <span className="text-[#ffe100]">Tai Nguyen</span>
                  </Bounce>
                </h1>
                <p className="inline-flex items-center">
                  <GiGraduateCap size={40} className="mr-2" />
                  <span>
                    I graduated from{" "}
                    <span className="text-blue-700">
                      Ho Chi Minh university of Technology
                    </span>
                  </span>
                </p>
              </div>
              <h1>
                Here are a few technologies I've been working with recently:
              </h1>
              <div className="flex space-x-5">
                <div className="flex flex-col space-y-2">
                  {infor.skills.main.map((program, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <AiFillCaretRight className="text-primary" />
                      <span className="text-sm md:text-lg lg:text-xl">
                        {program}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  {infor.skills.frameworks.map((framework, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <AiFillCaretRight className="text-primary" />
                      <span className="text-sm md:text-lg lg:text-xl">
                        {framework}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  {infor.skills.libraries.map((library, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <AiFillCaretRight className="text-primary" />
                      <span className="text-sm md:text-lg lg:text-xl">
                        {library}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-primary border-[3px] rounded-full max-w-[350px] lg:max-w-screen-sm">
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
        <div className="pt-5 md:pt-20 px-4 lg:px-20" id="project">
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
          {/* projects content */}
          {/* project 1 */}
          <div className="py-10 lg:py-32">
            <div className="flex flex-col lg:flex-row space-x-2 space-y-5 mx-auto items-center">
              <Fade right>
                <div className="w-full lg:w-3/4 order-1 lg:order-2 ">
                  <img
                    src={matchingGame}
                    alt="matching-game"
                    className="lg:ml-2 w-full"
                  />
                </div>
              </Fade>
              {/* <Fade left> */}
                <div className="order-2 lg:order-1">
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
                      <AiFillGithub className="text-primary w-full h-full" />
                    </a>
                  </div>
                </div>
              {/* </Fade> */}
            </div>
          </div>
          {/* project 2 */}

          <div className="py-10 lg:py-32">
            <div className="flex flex-col lg:flex-row space-x-2 space-y-5 mx-auto items-center">
              <Fade top>
                <div className="w-full lg:w-3/4">
                  <img src={simpleMusic} alt="simple-music-player" />
                </div>
              </Fade>
              {/* <Fade bottom> */}
                <div>
                  <h1 className="inline text-4xl font-bold text-transparent bg-gradient-to-r from-[#970590] to-[#74c8f8] bg-clip-text">
                    Simple music player
                  </h1>
                  <div className="">
                    <div className="relative w-full bg-[#112240] px-4 py-10 text-subText mt-10 mb-5 rounded-xl">
                      <div className="absolute top-0 text-white font-medium border-fuchsia-800 border -translate-y-1/2 px-2 py-[2px]">
                        Description
                      </div>
                      <span className="text-lg whitespace-pre-line">
                        {
                          "Play your favorite music.\n It has some features like play next song, pause, play random songs"
                        }
                      </span>
                    </div>
                  </div>
                  <h1 className="text-base sm:text-xl font-medium text-subText">
                    Technology:{" "}
                    <span className="text-sky-600">HTML CSS Javascript </span>
                  </h1>
                  <div className="flex my-8 items-center space-x-6">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://taitan02.github.io/matching-game/"
                      className="relative px-10 py-3 bg-gradient-to-r from-[#970590] to-[#74c8f8] rounded-xl group"
                    >
                      <span className="text-lg text-white font-semibold">
                        Chill now!
                      </span>
                      <div className="bg-white absolute w-0 h-full top-0 left-0 rounded-xl -z-10 opacity-40 group-hover:w-full group-hover:z-10 duration-500"></div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/taitan02/matching-game"
                      className="w-14 h-14 hover:scale-125 duration-500"
                    >
                      <AiFillGithub className="text-primary w-full h-full" />
                    </a>
                  </div>
                </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
