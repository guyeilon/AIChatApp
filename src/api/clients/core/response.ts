type ID = Record<'id', number>;
type Name = Record<'name', string>;

export type BaseItem = ID & Name;

type PaginatedResponse<Result extends object> = {
  page_count: number;
  count: number;
  results: Result[];
};
