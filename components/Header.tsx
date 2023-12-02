import { LOGO_URL } from "@/utility/constants";
import Image from "next/image";
import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Image
          className="logo"
          src={LOGO_URL}
          alt="Company Logo"
          width={44}
          height={44}
        />
        <h1 className="title">Subset Softwares</h1>
      </div>
      <div className="options">
        <ul>
          <li>Projects</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
