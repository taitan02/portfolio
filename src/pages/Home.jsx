import Header from "../components/Header";
import Footer from "../components/Footer";
import { aboutMe } from "../information";
import myPic from "../assets/images/myPic.jpg";
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
        <div className="py-40 px-20">
          <div className="flex items-center justify-between gap-x-2 ">
            <div className="min-w-fit">
              <h1 className="text-3xl text-primary font-semibold">About me</h1>
            </div>
            <div className="h-[1px] w-full">
              <div className="h-full bg-primary"></div>
            </div>
          </div>
          {/* About me - Content */}
          <div className="flex flex-col lg:flex-row pt-10 space-y-8 items-center space-x-6">
            <div className="flex flex-col space-y-5 text-subText text-xl">
              <h1 className="text-justify">{aboutMe.about}</h1>
              <h1>
                Here are a few technologies I've been working with recently:
              </h1>
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
        {/* Project */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
