"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";

interface Props {
  totalPages: number;
  getNavigationLink: (page: number) => string;
}

export default function Pagination({ totalPages, getNavigationLink }: Props) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const pageParam = Number(router.query.page) || 1;
    setCurrentPage(pageParam);
  }, [router.query.page]);

  return (
    <div className={styles["pagination"]}>
      <Link
        href={getNavigationLink(currentPage - 1)}
        className={clsx("button", "previous", currentPage === 1 && "disabled")}
      >
        &lt; Previous
      </Link>
      <Link
        href={getNavigationLink(currentPage + 1)}
        className={clsx(
          "button",
          "upcoming",
          currentPage === totalPages && "disabled"
        )}
      >
        Next &gt;
      </Link>
    </div>
  );
}
