import { TagCount } from "@/types/tag";
import Link from "next/link";
import "./Tags.scss";

type Props = { tags: TagCount[]; title: string; showCount?: boolean };

function getTagsLink(value: TagCount) {
  return `/tag?page=1&limit=10&tag=${value.tag}`;
}

export default function Tags({ tags, title, showCount }: Props) {
  return (
    <div className="tags">
      <h2 className="section-title">{title}</h2>
      <div className="section">
        {tags.map((item) => (
          <Link className="tag" key={item.tag} href={getTagsLink(item)}>
            <div className="value">{item.tag}</div>
            {showCount && <div className="count">{item.count}</div>}
          </Link>
        ))}
      </div>
    </div>
  );
}
