import { getArticleUrl } from "@/helpers/getArticleUrl";
import { Article } from "@/types/article";
import BackgroundCheck from "./BackgroundCheck";
import Card from "./Card";
import styles from "./Cards.module.scss";

const Cards = ({ cards, title }: { cards: Article[]; title: string }) => {
  return (
    <BackgroundCheck>
      <div className={styles["cards"]}>
        <h2 className={styles["section-title"]}>{title}</h2>
        <div className={styles["section"]}>
          {cards.map((card) => (
            <Card
              key={card.slug}
              href={getArticleUrl(card.slug)}
              title={card.meta.title}
              summary={card.meta.summary}
              publishedAt={card.meta.publishedDate}
            />
          ))}
        </div>
      </div>
    </BackgroundCheck>
  );
};

export default Cards;
