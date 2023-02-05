const skillBand = [
  {
    name: "Frontend",
  },
  {
    name: "*",
  },
  {
    name: "Back-end",
  },
  {
    name: "*",
  },
  {
    name: "Databases",
  },
  {
    name: "*",
  },
  {
    name: "Data Anaytics",
  },
  {
    name: "*",
  },
  {
    name: "Linux",
  },
  {
    name: "*",
  },
  {
    name: "Dev-Ops",
  },
  {
    name: "*",
  },
  {
    name: "Agile",
  },
];

const Band = () => {
  return (
    <div className="band absolute bottom-0 right-0 mb-16 h-32 w-screen -skew-y-[4deg] bg-black sm:mb-24 sm:h-24">
      <div className="relative h-full w-full overflow-hidden p-16">
        <div className="animate absolute left-0 flex justify-around">
          <ul className="flex w-full justify-around gap-5">
            {skillBand.map((skill) => (
              <li className="flex text-white" key={skill.name}>
                {skill.name === "*" ? (
                  <span className="text-3xl text-[#E94E35]">*</span>
                ) : (
                  <h3>{skill.name}</h3>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Band;
