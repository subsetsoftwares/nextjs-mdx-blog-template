import { PAGE_BLOGS_ALL } from "@/utility/urls";
import Link from "next/link";
import React from "react";
import "./BigBlock.scss";

interface Props {
  quote: string;
}

const BigBlock: React.FC<Props> = ({ quote }) => {
  return (
    <div className="big-block">
      <div className="container">
        <h3 className="title">{quote}</h3>
        <h4 className="sub-title">
          Here we have few articles about what we have learnt
        </h4>
        <Link className="view-all" href={PAGE_BLOGS_ALL}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default BigBlock;
