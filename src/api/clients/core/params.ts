export type AutocompleteParams = {
  /**
   * A search term
   */
  q?: string;
};

export type SortingParams = {
  /**
   * Which field to use when ordering the results.
   */
  ordering?: string;
};

export type PaginationParams = {
  /**
   * A page number within the paginated result set.
   */
  page?: number;
  /**
   * Number of results to return per page.
   */
  size?: number;
};

export type DateRangeParams = {
  /**
   * Filter by start_date, accepts start-date and end-date in ISO Format(yyyy-MM-dd)
   * Will be ignored if end_date was not supplied
   */
  start_date?: string;
  /**
   * Filter by end_date, accepts start-date and end-date in ISO Format(yyyy-MM-dd)
   * Will be ignored if start_date was not supplied
   */
  end_date?: string;
};

export type ListParams = PaginationParams & SortingParams & AutocompleteParams;
