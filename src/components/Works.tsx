import Image from "next/image";
import Star from "@/assets/icons/star.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

const workPages = [
  {
    number: "1",
    name: "Pet's Work",
    description: "Ecommerce for Pet Services",
    time: {
      begin: "2020-05-01",
      end: "2021-02-04",
    },
  },
  {
    number: "2",
    name: "ECOTURISMO",
    description: "Landing Page for turistic destinations in Peru",
    time: {
      begin: "2020-05-01",
      end: "2021-02-04",
    },
  },
  {
    number: "3",
    name: "SMAYLI'S",
    description: "Veterinary Dashboard",
    time: {
      begin: "2020-05-01",
      end: "2021-02-04",
    },
  },
  {
    number: "4",
    name: "DON JUAN",
    description: "Virtual Restaurant",
    time: {
      begin: "2020-05-01",
      end: "2021-02-04",
    },
  },
];

const Works = () => {
  const SMmediQuery = useMediaQuery("(max-width: 576px)");
  const [openWorks, setOpenWorks] = useState<boolean>(false);
  const workPagesSize = !SMmediQuery || openWorks ? workPages.length : 2;

  const changeSlides = () => {
    setOpenWorks((prev) => !prev);
  };

  return (
    <div
      className={`flex h-screen flex-col gap-10 pt-14 ${
        openWorks ? "sm:h-full" : ""
      } bg-white-150`}
    >
      {/* Image */}
      <div className="flex w-full flex-col items-center justify-center">
        <Image src={Star} alt="orange_star" height={50} width={50} />
        <h1 className="text-center">WORKS</h1>
      </div>

      {/* Works */}
      <div className="flex flex-col gap-5 sm:mx-6 lg:container lg:mx-auto lg:max-h-[28rem]">
        {workPages
          .map((item, index) => (
            <div
              className="work-container flex h-36 w-full gap-5 border-2 border-black p-4 ease-out hover:bg-black hover:text-white sm:h-full sm:flex-col"
              key={index}
            >
              {/* Number */}
              <div className="work-box flex items-center justify-center font-bold text-white sm:w-full lg:w-1/12">
                <p className="flex h-16 w-16 items-center justify-center bg-black text-2xl text-white">
                  {item.number}
                </p>
              </div>

              {/* Name and description */}
              <div className="flex flex-col gap-2 text-xl lg:w-9/12">
                <span className="flex items-center justify-start font-bold">
                  {item.name}
                </span>
                <p className="flex items-center justify-start">
                  {item.description}
                </p>
              </div>

              {/* Time */}
              <div className="flex flex-col items-center justify-center lg:w-2/12">
                <p className="flex items-center justify-center">
                  {item.time.end}
                </p>
                <p className="flex items-center justify-center">
                  {item.time.begin}
                </p>
              </div>
            </div>
          ))
          .slice(0, workPagesSize)}
      </div>
      <div className="w-full py-4 text-center lg:hidden" onClick={changeSlides}>
        <p className="decoration text-base underline hover:text-[#E94E35] active:text-black">{`${
          openWorks ? "Ver menos" : "Ver todo"
        }`}</p>
      </div>
    </div>
  );
};

export default Works;
