import { PAGE_ARTICLES_INDEX } from "@/utility/urls";
import Link from "next/link";
import "./BigBlock.scss";

interface Props {
  quote: string;
  subtitle: string;
}

export default function BigBlock({ quote, subtitle }: Props) {
  return (
    <div className="big-block">
      <div className="container">
        <h3 className="title">{quote}</h3>
        <h4 className="sub-title">{subtitle}</h4>
        <Link className="view-all" href={PAGE_ARTICLES_INDEX}>
          View All
        </Link>
      </div>
    </div>
  );
}
