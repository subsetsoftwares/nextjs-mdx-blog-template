import React, { PropsWithChildren } from "react";
import styles from "./BackgroundCheck.module.scss";

const BackgroundCheck: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return <div className={styles["background-check"]}>{children}</div>;
};

export default BackgroundCheck;
