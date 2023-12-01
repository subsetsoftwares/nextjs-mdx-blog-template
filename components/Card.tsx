import styles from "@/styles/Home.module.css";
import React from "react";

interface CardProps {
  href: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ href, title, description }) => {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
};

export default Card;
