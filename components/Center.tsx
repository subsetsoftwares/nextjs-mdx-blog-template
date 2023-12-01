import styles from "@/styles/Home.module.css";
import Image from "next/image";
import React from "react";

const Center: React.FC = () => {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
};

export default Center;
