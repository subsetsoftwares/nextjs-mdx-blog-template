import Link from "next/link";
import React from "react";
import "./Card.scss";

interface CardProps {
  href: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ href, title, description }) => {
  return (
    <Link className="card" href={href}>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </Link>
  );
};

export default Card;
