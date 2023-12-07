import { QUOTE_KNOWLEDGE_SHARING } from "@/utility/constants";
import { PAGE_ABOUT, PAGE_ARTICLES_INDEX } from "@/utility/urls";
import Link from "next/link";
import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="section">
        <h2 className="gray-tagline">{QUOTE_KNOWLEDGE_SHARING}</h2>
      </div>
      <div className="section">
        <div className="links">
          <Link className="link" href={PAGE_ARTICLES_INDEX}>
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
