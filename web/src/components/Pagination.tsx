import React, { useState, useEffect, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const calculateVisiblePages = useCallback(() => {
    const totalPagesToShow = 5; // Número total de páginas exibidas
    const halfTotalPagesToShow = Math.floor(totalPagesToShow / 2);

    let startPage = currentPage - halfTotalPagesToShow;
    let endPage = currentPage + halfTotalPagesToShow;

    if (startPage <= 0) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    setVisiblePages(pages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    calculateVisiblePages();
  }, [calculateVisiblePages]);

  return (
    <div id="Pagination">
      <ReactPaginate
        initialPage={currentPage - 1}
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={onPageChange}
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;