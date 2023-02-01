import Sites from "./Sites";
import Logo from "./Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header>
      <div className="fixed top-0 z-40 h-14 w-screen bg-white-150 px-4">
        <div className="flex h-full w-full items-center justify-between lg:container lg:mx-auto">
          <Logo />
          <Sites />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
