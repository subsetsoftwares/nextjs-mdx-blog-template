import Link from "next/link";
import React from "react";
import "./Card.scss";

interface CardProps {
  href: string;
  title: string;
  summary: string;
  publishedAt: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { href, title, summary, publishedAt } = props;
  return (
    <Link className="card" href={href}>
      <h3 className="title">{title}</h3>
      <p className="summary">{summary}</p>
      <p className="published">{publishedAt}</p>
    </Link>
  );
};

export default Card;
