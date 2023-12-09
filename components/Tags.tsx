import { TagCount } from "@/types/tag";
import Link from "next/link";
import styles from "./Tags.module.scss";

type Props = { tags: TagCount[]; title: string; showCount?: boolean };

function getTagsLink(value: TagCount) {
  return `/tags/${value.tag}/1`;
}

export default function Tags({ tags, title, showCount }: Props) {
  return (
    <div className={styles["tags"]}>
      <h2 className="section-title">{title}</h2>
      <div className={styles["section"]}>
        {tags.map((item) => (
          <Link
            className={styles["tag"]}
            key={item.tag}
            href={getTagsLink(item)}
          >
            <div className={styles["value"]}>{item.tag}</div>
            {showCount && <div className={styles["count"]}>{item.count}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
}
