import { LOREM_EPSUM, ZEN_TEMPLE_URL } from "@/utility/constants";
import Image from "next/image";
import React from "react";
import "./HeroBanner.scss";

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner">
      <div className="left-section">
        <Image
          className="logo"
          src={ZEN_TEMPLE_URL}
          alt="Company Logo"
          width={300}
          height={300}
        />
      </div>
      <div className="right-section">
        <div className="content">
          <p className="hello-world">Hello World</p>
          <h2 className="salutation">Welcome</h2>
          <p className="what-we-do">{LOREM_EPSUM}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
