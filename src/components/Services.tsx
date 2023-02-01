import Star from "@/assets/icons/star.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";

const myServices = [
  {
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.",
  },
  {
    title: "Database Administration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.",
  },
  {
    title: "Data Analisis",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.",
  },
  {
    title: "English && Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.",
  },
];

const Services = () => {
  const SMmediQuery = useMediaQuery("(max-width: 576px)");
  const [openWorks, setOpenWorks] = useState<boolean>(false);
  const servicesPagesSize = !SMmediQuery || openWorks ? myServices.length : 2;

  const changeSlides = () => {
    setOpenWorks((prev) => !prev);
  };

  return (
    <div className={`h-screen ${openWorks ? "sm:h-full" : ""} bg-white-150 pt-14`}>
      <div className="mx-auto flex flex-col gap-8 lg:container">
        <div className="flex w-full flex-col items-center justify-center">
          <Image src={Star} alt="orange_star" className="h-12 w-12" />
          <h1 className="">SERVICES</h1>
        </div>

        <div className="grid grid-rows-2 gap-5 sm:mx-6 lg:grid-cols-2">
          {myServices
            .map((item, index) => (
              <div
                className="flex flex-col gap-6 border-2 border-black p-6 hover:bg-black hover:text-white"
                key={index}
              >
                <h3>{item.title}</h3>
                <p className="text-sm">{item.content}</p>
              </div>
            ))
            .slice(0, servicesPagesSize)}
        </div>

        <div
          className="w-full py-4 text-center lg:hidden"
          onClick={changeSlides}
        >
          <p className="decoration text-base underline hover:text-[#E94E35] active:text-black">{`${
            openWorks ? "Ver menos" : "Ver todo"
          }`}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
