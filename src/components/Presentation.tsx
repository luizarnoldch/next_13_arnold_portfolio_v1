import React from "react";
import Image from "next/image";
import Arnold from "@/assets/icons/arnold.png";
import Band from "@/components/Band/Band";

type Props = {};

const Presentation = (props: Props) => {
  return (
    <div className="h-screen overflow-auto bg-white-150 pt-14">
      <div className="item-center container mx-auto flex h-5/6 w-full">
        <div className="z-20 my-auto flex w-3/5 flex-col gap-8">
          <div>
            <h1>
              HI, I&apos;M ARNOLD. <br />
              I&apos;M SOFTWARE ENGINEER <br />
              FROM LIMA - PERÚ
            </h1>
          </div>

          <div className="sm:hidden">
            <h3>
              FRONT-END <span className="text-[#E94E35]">*</span> BACK-END{" "}
              <span className="text-[#E94E35]">*</span> DATABASES
            </h3>
          </div>

          <div className="flex h-16 w-96 border-2 border-black">
            <p className="flex h-full w-48 cursor-default items-center justify-center bg-black text-lg tracking-wider text-[#F3F1EF]">
              Got a project?
            </p>
            <p className="flex h-full w-48 cursor-pointer items-center justify-center bg-[#F3F1EF] text-lg tracking-wider text-black">
              Let&apos;s talk.
            </p>
          </div>
        </div>

        <div className="z-10 flex w-2/5 items-center justify-center lg:relative">
          <div className="absolute h-[300px] w-[300px] sm:right-0">
            <Image
              src={Arnold}
              alt="foto_arnold"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="h-1/6 w-full">
        <Band />
      </div>
    </div>
  );
};

export default Presentation;
