import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

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
  // {
  // 	name: 'google',
  // 	icon: <AiOutlineGoogle size='2rem' />,
  //   route: "https://mail.google.com/mail/luiz.chavez@unmsm.edu.pe"
  // },
];

const Media = () => {
  return (
    <ul className="flex h-20 w-full items-center justify-center gap-10">
      {mediaNetwork.map((item) => (
        <li
          key={item.name}
          className="flex h-12 w-12 items-center justify-center hover:rounded-full hover:bg-[#E94E35]/50 active:bg-[#E94E35]/80"
        >
          {/* <a href={item.route} target='_blank'>
						{item.icon}
					</a> */}
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default Media;
