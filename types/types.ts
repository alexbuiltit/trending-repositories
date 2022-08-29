import { components } from '@octokit/openapi-types';
import { ErrorHandling } from './interface';

export type RepositoryType = {
  name: string;
  description?: string | null;
  starCount: number;
  id: number;
  language?: string | null;
  link: string;
  favourite?: boolean;
  toggleFavourite?: (id: number) => void;
};

export type RepositoryDataMapped = {
  items?: RepositoryType[];
} & ErrorHandling;

export type RepositoryListType = {
  total_count?: number;
  incomplete_results?: boolean;
  items: RepositoryType[];
  filters?: string[] | undefined;
  toggleFavourite?: (id: number) => void | undefined;
  favourites?: number[] | undefined;
};

export type RepositorySearchResult = {
  total_count?: number;
  incomplete_results?: boolean;
  items: components['schemas']['repo-search-result-item'][];
} & ErrorHandling;
