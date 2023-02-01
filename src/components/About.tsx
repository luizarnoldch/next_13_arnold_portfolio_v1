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
              <p className="scroll-bar-text max-h-[16rem] overflow-y-auto text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquet et diam sed eleifend. Sed at arcu tincidunt ante aliquet
                congue. Nullam at vestibulum lectus. Sed posuere ornare posuere.
                Sed tempor egestas ipsum, a interdum urna imperdiet vitae. Fusce
                elementum justo at dignissim tincidunt. Vivamus semper et dui
                feugiat iaculis. Nulla et condimentum nulla. Donec et felis in
                mauris suscipit suscipit at quis lacus. Nam maximus a lacus
                tincidunt mattis. Sed dignissim tristique diam, quis efficitur
                quam ultrices sed. Sed eu vehicula tellus. Cras vel gravida
                ante. Donec vitae feugiat tortor. Cras ultricies libero massa,
                sit amet accumsan elit varius a. Phasellus magna ex, porta sed
                sapien a, ultrices ornare lorem. Pellentesque vel fermentum
                nisl, et commodo justo. Morbi id augue ut nunc semper faucibus.
                Vivamus varius nunc vitae posuere facilisis. Nunc cursus tempor
                erat, a lobortis mauris porta faucibus.
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
