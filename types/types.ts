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

export type RepositoryListType = {
  items: RepositoryType[] | undefined;
  filters?: string[] | undefined;
  toggleFavourite?: (id: number) => void;
  favourites?: number[] | undefined;
};
