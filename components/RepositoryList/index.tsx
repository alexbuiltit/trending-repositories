import { RepositoryCard } from '@/components/RepositoryCard';
import { useMemo } from 'react';
import { RepositoryListType } from 'types/types';
import { RepositoryListWrapper } from './index.styled';

export const RepositoryList = ({ items = [], filters, toggleFavourite, favourites }: RepositoryListType) => {
  let repositories = items;

  if (filters && filters?.length > 0) {
    const filteredItems = items.filter(({ language }) => filters.includes(language as string));
    repositories = filteredItems;
  }

  const listItems = useMemo(
    () =>
      repositories?.map((repository) => {
        return (
          <RepositoryCard
            key={repository.id}
            name={repository.name}
            description={repository.description}
            starCount={repository.starCount}
            id={repository.id}
            link={repository.link}
            toggleFavourite={toggleFavourite}
            favourite={favourites?.includes(repository.id)}
            language={repository.language}
          />
        );
      }),
    [repositories, favourites, toggleFavourite],
  );

  return (
    <RepositoryListWrapper>{listItems?.length > 0 ? listItems : <p>No items to display</p>}</RepositoryListWrapper>
  );
};
