import Link from "next/link";
import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  href: string;
  title: string;
  summary: string;
  publishedAt: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { href, title, summary, publishedAt } = props;
  return (
    <Link className={styles["card"]} href={href}>
      <h3 className={styles["title"]}>{title}</h3>
      <p className={styles["summary"]}>{summary}</p>
      <p className={styles["published"]}>{publishedAt}</p>
    </Link>
  );
};

export default Card;
