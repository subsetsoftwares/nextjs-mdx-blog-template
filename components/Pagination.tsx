import clsx from "clsx";
import Link from "next/link";
import styles from "./Pagination.module.scss";

interface Props {
  pageNumber: number;
  totalPages: number;
  getNavigationLink: (page: number) => string;
}

export default function Pagination({
  pageNumber,
  totalPages,
  getNavigationLink,
}: Props) {
  return (
    <div className={styles["pagination"]}>
      <Link
        href={getNavigationLink(pageNumber - 1)}
        className={clsx(
          styles["button"],
          "previous",
          pageNumber === 1 && styles["disabled"]
        )}
      >
        &lt; Previous
      </Link>
      <Link
        href={getNavigationLink(pageNumber + 1)}
        className={clsx(
          styles["button"],
          "upcoming",
          pageNumber === totalPages && styles["disabled"]
        )}
      >
        Next &gt;
      </Link>
    </div>
  );
}
