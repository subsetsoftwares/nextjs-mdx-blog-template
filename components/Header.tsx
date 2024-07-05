import { LOGO_URL, SITE_TITLE } from "@/utility/constants";
import { PAGE_ABOUT, PAGE_ARTICLES_INDEX, PAGE_HOME } from "@/utility/urls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link href={PAGE_HOME} className={styles["logo-container"]}>
          <Image
            className={styles["logo"]}
            src={LOGO_URL}
            alt="Company Logo"
            width={44}
            height={44}
          />
          <h1 className={styles["title"]}>{SITE_TITLE}</h1>
        </Link>
      </div>

      <div className={styles["links"]}>
        <Link className={styles["link"]} href={PAGE_ARTICLES_INDEX}>
          Articles
        </Link>
        <Link className={styles["link"]} href={PAGE_ABOUT}>
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
