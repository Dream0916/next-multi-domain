import { FC } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./Mobileheader";

const Header: FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
