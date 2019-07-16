import React from 'react';
import { connect } from 'react-redux';

import carsActions, { CarsSelectors } from '../../stores/cars';
import { RootState } from '../../stores';
import { PaginationButton, PaginationText, Pagination } from './Styles';

interface Props {
  page: number;
  totalPageCount: number;
  setPage: (page: number) => void;
}

function TablePagination({
  page,
  totalPageCount,
  setPage
}: Props): JSX.Element {
  return (
    <Pagination>
      <PaginationButton disabled={page === 1} onClick={(): void => setPage(1)}>
        First
      </PaginationButton>
      <PaginationButton
        disabled={page === 1}
        onClick={(): void => setPage(page - 1)}
      >
        Previous
      </PaginationButton>
      <PaginationText>{`Page ${page} of ${totalPageCount}`}</PaginationText>

      <PaginationButton
        disabled={page === totalPageCount}
        onClick={(): void => setPage(page + 1)}
      >
        Next
      </PaginationButton>
      <PaginationButton
        disabled={page === totalPageCount}
        onClick={(): void => setPage(totalPageCount)}
      >
        Last
      </PaginationButton>
    </Pagination>
  );
}

const mapStateToProps = (
  state: RootState
): { page: number; totalPageCount: number } => ({
  page: CarsSelectors.getPage(state),
  totalPageCount: CarsSelectors.getTotalPageCount(state)
});

const dispatchProps = {
  setPage: carsActions.setPage
};

export const TablePaginationContainer = connect(
  mapStateToProps,
  dispatchProps
)(TablePagination);
