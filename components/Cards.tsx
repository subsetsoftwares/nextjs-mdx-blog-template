import { getBlogUrl } from "@/helpers/getBlogUrl";
import { Article } from "@/types/article";
import BackgroundCheck from "./BackgroundCheck";
import Card from "./Card";
import "./Cards.scss";

const Cards = ({ cards, title }: { cards: Article[]; title: string }) => {
  return (
    <BackgroundCheck className="cards">
      <h2 className="section-title">{title}</h2>
      <div className="section">
        {cards.map((card) => (
          <Card
            key={card.slug}
            href={getBlogUrl(card.slug)}
            title={card.meta.title}
            description={card.meta.description}
          />
        ))}
      </div>
    </BackgroundCheck>
  );
};

export default Cards;
