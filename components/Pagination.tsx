import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "./Pagination.scss";

interface Props {
  totalPages: number;
}

export default function Pagination({ totalPages }: Props) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const pageParam = Number(router.query.page) || 1;
    setCurrentPage(pageParam);
  }, [router.query.page]);

  return (
    <div className="pagination">
      <Link
        href={`/articles/${currentPage - 1}`}
        className={`button previous ${currentPage === 1 ? "disabled" : ""}`}
      >
        &lt; Previous
      </Link>
      <Link
        href={`/articles/${currentPage + 1}`}
        className={`button upcoming ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        Next &gt;
      </Link>
    </div>
  );
}
