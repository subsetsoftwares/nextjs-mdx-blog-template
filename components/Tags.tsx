import { TagCount } from "@/types/tag";
import "./Tags.scss";

type Props = { tags: TagCount[]; title: string; showCount?: boolean };

const Tags = ({ tags, title, showCount }: Props) => {
  return (
    <div className="tags">
      <h2 className="section-title">{title}</h2>
      <div className="section">
        {tags.map((item) => (
          <div className="tag" key={item.tag}>
            <div className="value">{item.tag}</div>
            {showCount && <div className="count">{item.count}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
