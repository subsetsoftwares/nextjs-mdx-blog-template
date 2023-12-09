import { QUOTE_KNOWLEDGE_SHARING } from "@/utility/constants";
import { PAGE_ABOUT, PAGE_ARTICLES_INDEX } from "@/utility/urls";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["section"]}>
        <h2 className={styles["gray-tagline"]}>{QUOTE_KNOWLEDGE_SHARING}</h2>
      </div>
      <div className={styles["section"]}>
        <div className={styles["links"]}>
          <Link className={styles["link"]} href={PAGE_ARTICLES_INDEX}>
            Articles
          </Link>
          <Link className={styles["link"]} href={PAGE_ABOUT}>
            About
          </Link>
        </div>
        <p className={styles["made-in-india"]}>
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
