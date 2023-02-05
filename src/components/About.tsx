import React from "react";
import Image from "next/image";
import Star from "@/assets/icons/star.png";
import Media from "./Media/Media";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen w-full bg-white-150 pt-14">
      <div className="flex flex-col gap-16 pt-32" id="about">
        <div className="flex h-2/5 w-full flex-col items-center justify-center gap-4">
          <Image src={Star} alt="orange_star" height={50} width={50} />
          <h1 className="">ABOUT ME</h1>
        </div>

        <div className="flex h-3/5 w-full items-center justify-center">
          <div className="m-auto flex flex-col gap-10 rtl:text-base">
            <div className="scroll-bar sm:max-w-[22rem] lg:max-w-[50rem]">
              <p className="scroll-bar-text max-h-[36rem] overflow-y-auto text-center">
              Hi! I&apos;m Arnold, a Software Engineering student at the Universidad Nacional Mayor de San Marcos, I speak Spanish as my first language and English as my second language. <br /><br />

              Throughout this student stage, I was able to develop my soft skills such as communication and leadership as well as my hard skills such as programming and project development. At the same time I was able to reinforce my skills with external courses on online education platforms such as udemy, platzi, etc., as well as external diplomas.<br /><br />

              I am passionate about software development in general since I can do and support others to carry out their projects. I am in constant training so that my work has a high impact.<br /><br />

              My professional objective is to be able to develop high-impact software projects. I am looking for companies or people with ambitious projects that allow me to apply all my knowledge and also continue to grow as a professional.<br /><br />

              If I am the missing piece in your team, you can contact me through my social networks or send me a personal email.<br /><br />
              </p>
            </div>
            <Media />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
