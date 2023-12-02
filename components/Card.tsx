import Link from "next/link";
import React from "react";
import "./Card.scss";

interface CardProps {
  href: string;
  title: string;
  description: string;
  publishedAt: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { href, title, description, publishedAt } = props;
  return (
    <Link className="card" href={href}>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <p className="published">{publishedAt}</p>
    </Link>
  );
};

export default Card;
