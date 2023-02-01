import { ReactElement } from "react";
import Navbar from "@/components/Navbar/Navbar";

type LayoutProps = {
  children?: ReactElement | ReactElement[];
};

const IndexLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default IndexLayout;
