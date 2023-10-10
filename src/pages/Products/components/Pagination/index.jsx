import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss";

export const Pagination = ({onChangePage}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) =>  onChangePage(event.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
