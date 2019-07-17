// ETA: 1-2 hours
import { render } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { Pagination } from './index';

describe('<Pagination />', () => {
  it('should render "First" page link', () => {
    const { getByText } = render(
      <Pagination page={1} totalPageCount={100} setPage={(): void => {}} />
    );

    expect(getByText('First')).toBeDefined();
  });

  it('should render "Previous" page link', () => {
    const { getByText } = render(
      <Pagination page={1} totalPageCount={100} setPage={(): void => {}} />
    );

    expect(getByText('Previous')).toBeDefined();
  });

  it('should render "Page 2 of 10"', () => {
    const { getByText } = render(
      <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
    );

    expect(getByText('Page 2 of 10')).toBeDefined();
  });

  it('should render "Next" page link', () => {
    const { getByText } = render(
      <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
    );

    expect(getByText('Next')).toBeDefined();
  });

  it('should render "Last" page link', () => {
    const { getByText } = render(
      <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
    );

    expect(getByText('Last')).toBeDefined();
  });

  describe('on first page', () => {
    it('should disable "First" page link', () => {
      const { getByText } = render(
        <Pagination page={1} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('First')).toBeDisabled();
    });

    it('should disable "Previous" page link', () => {
      const { getByText } = render(
        <Pagination page={1} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Previous')).toBeDisabled();
    });

    it('should enable "Next" page link', () => {
      const { getByText } = render(
        <Pagination page={1} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Next')).toBeEnabled();
    });
  });

  describe('on not last page and not first page', () => {
    it('should enable "First" page link', () => {
      const { getByText } = render(
        <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('First')).toBeEnabled();
    });

    it('should enable "Previous" page link', () => {
      const { getByText } = render(
        <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Previous')).toBeEnabled();
    });

    it('should enable "Next" page link', () => {
      const { getByText } = render(
        <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Next')).toBeEnabled();
    });

    it('should enable "Last" page link', () => {
      const { getByText } = render(
        <Pagination page={2} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Last')).toBeEnabled();
    });
  });

  describe('on last page', () => {
    it('should disable "Next" page link', () => {
      const { getByText } = render(
        <Pagination page={10} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Next')).toBeDisabled();
    });

    it('should disable "Last" page link', () => {
      const { getByText } = render(
        <Pagination page={10} totalPageCount={10} setPage={(): void => {}} />
      );

      expect(getByText('Last')).toBeDisabled();
    });
  });
});
