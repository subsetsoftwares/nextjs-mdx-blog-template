import { LOGO_URL } from "@/utility/constants";
import {
  PAGE_ABOUT,
  PAGE_ARTICLES_INDEX,
  PAGE_HOME,
  PAGE_PROJECTS_INDEX,
} from "@/utility/urls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link href={PAGE_HOME} className="logo-container">
          <Image
            className="logo"
            src={LOGO_URL}
            alt="Company Logo"
            width={44}
            height={44}
          />
          <h1 className="title">Subset Softwares</h1>
        </Link>
      </div>

      <div className="links">
        <Link className="link" href={PAGE_PROJECTS_INDEX}>
          Projects
        </Link>
        <Link className="link" href={PAGE_ARTICLES_INDEX}>
          Articles
        </Link>
        <Link className="link" href={PAGE_ABOUT}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
