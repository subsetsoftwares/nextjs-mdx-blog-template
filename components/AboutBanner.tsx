import { LOREM_EPSUM } from "@/utility/constants";
import Image from "next/image";
import styles from "./AboutBanner.module.scss";

export default function AboutBanner({ imageUrl }: { imageUrl: string }) {
  return (
    <div className={styles["about-banner"]}>
      <div className={styles["left-section"]}>
        <Image
          className={styles["info-image"]}
          src={imageUrl}
          alt="Company Logo"
          width={300}
          height={300}
        />
      </div>
      <div className={styles["right-section"]}>
        <div className={styles["content"]}>
          <p className={styles["hello-world"]}>Hello World</p>
          <h2 className={styles["salutation"]}>Welcome</h2>
          <p className={styles["what-we-do"]}>{LOREM_EPSUM}</p>
        </div>
      </div>
    </div>
  );
}
