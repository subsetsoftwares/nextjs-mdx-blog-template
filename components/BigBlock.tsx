import { PAGE_ARTICLES_INDEX } from "@/utility/urls";
import Link from "next/link";
import styles from "./BigBlock.module.scss";

interface Props {
  quote: string;
  subtitle: string;
}

export default function BigBlock({ quote, subtitle }: Props) {
  return (
    <div className={styles["big-block"]}>
      <div className={styles["container"]}>
        <h3 className={styles["title"]}>{quote}</h3>
        <h4 className={styles["sub-title"]}>{subtitle}</h4>
        <Link className={styles["view-all"]} href={PAGE_ARTICLES_INDEX}>
          View All
        </Link>
      </div>
    </div>
  );
}
