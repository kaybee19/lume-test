import React from "react";
import "./styles.scss";
import { useApp } from "../../../context/AppContext";

// Icons
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  MdCategory,
  MdOutlineSettings,
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdChatBubbleOutline,
  MdHistory,
} from "react-icons/md";

export default function Navbar() {
  const { width } = useApp();
  const [toggleNav, setToggleNav] = React.useState(false);

  const handleToggle = () => {
    width < 900 && setToggleNav(!toggleNav);
  };

  React.useEffect(() => {
    width > 900 && setToggleNav(false);
  }, [width]);

  return (
    <nav
      className={`d-flex flex-start ${
        width < 900 && toggleNav ? "nav-scroll" : ""
      }`}
    >
      <div className="nav-burger" onClick={handleToggle}>
        <HiOutlineMenuAlt4 />
      </div>
      <ul>
        <li className="nav-item active">
          <MdCategory />
        </li>
        <li className="nav-item">
          <MdOutlineSettings />
        </li>
        <li className="nav-item">
          <MdOutlineShoppingCart />
        </li>
        <li className="nav-item">
          <MdOutlineFavoriteBorder />
        </li>
        <li className="nav-item">
          <MdChatBubbleOutline />
        </li>
        <li className="nav-item">
          <MdHistory />
        </li>
      </ul>
    </nav>
  );
}
