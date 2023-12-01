import { getBlogUrl } from "@/helpers/getBlogUrl";
import styles from "@/styles/Home.module.css";
import { Article } from "@/types/article";
import Card from "./Card";

const Cards = ({ cards }: { cards: Article[] }) => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <Card
          key={card.slug}
          href={getBlogUrl(card.slug)}
          title={card.meta.title}
          description={card.meta.description}
        />
      ))}
    </div>
  );
};

export default Cards;
