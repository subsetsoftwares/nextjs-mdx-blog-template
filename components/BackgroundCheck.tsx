import React, { PropsWithChildren } from "react";
import "./BackgroundCheck.scss";

type Props = PropsWithChildren & { className: string };
const BackgroundCheck: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <div className={`background-check ${className ?? ""}`}>{children}</div>
  );
};

export default BackgroundCheck;
