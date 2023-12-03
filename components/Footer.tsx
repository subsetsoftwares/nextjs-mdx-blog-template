import { QUOTE_KNOWLEDGE_SHARING } from "@/utility/constants";
import {
  PAGE_ABOUT,
  PAGE_ARTICLES_ALL,
  PAGE_PROJECTS_ALL,
} from "@/utility/urls";
import Link from "next/link";
import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="section">
        <p className="gray-tagline">{QUOTE_KNOWLEDGE_SHARING}</p>
      </div>
      <div className="section">
        <div className="links">
          <Link className="link" href={PAGE_PROJECTS_ALL}>
            Projects
          </Link>
          <Link className="link" href={PAGE_ARTICLES_ALL}>
            Articles
          </Link>
          <Link className="link" href={PAGE_ABOUT}>
            About
          </Link>
        </div>
        <p className="made-in-india">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          in India
        </p>
      </div>
    </div>
  );
};

export default Footer;
