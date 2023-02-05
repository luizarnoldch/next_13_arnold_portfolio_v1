/* eslint-disable react/display-name */
import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";"react";

const mediaNetwork = [
  {
    name: "whatsapp",
    icon: <AiOutlineWhatsApp size="2rem" />,
    route: "https://api.whatsapp.com/send?phone=971544143",
  },
  {
    name: "github",
    icon: <AiFillGithub size="2rem" />,
    route: "https://github.com/luizarnoldch",
  },
  {
    name: "linkedin",
    icon: <AiFillLinkedin size="2rem" />,
    route: "https://www.linkedin.com/in/luiz-arnold-chavez-burgos-795a47211/",
  },
  {
  	name: 'google',
  	icon: <LinkScroll to="contact" smooth={true} ><AiOutlineGoogle size='2rem' /></LinkScroll>,
    route: ""
  },
];

const Media = () => {
  const redirectUrl = (url:string) => {
    window.location.href = url;
  }

  return (
    <ul className="flex h-20 w-full items-center justify-center gap-10">
      {mediaNetwork.map((item) => (
        <li
          key={item.name}
          className="flex h-12 w-12 items-center justify-center hover:rounded-full hover:bg-[#E94E35]/50 active:bg-[#E94E35]/80"
        >
          <p onClick={() => redirectUrl(item.route)}>
            {item.icon}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Media;
