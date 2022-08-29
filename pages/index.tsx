import { useEffect, useState } from 'react';
import { FilterItem } from '@/components/FilterItem';
import { ContentContainer } from '@/components/Layout/contentContainer.styled';
import { RepositoryList } from '@/components/RepositoryList';
import { ListingCategory } from '@/types/enums';
import { RepositoryType } from '@/types/types';
import { Github } from '@/utils/github';
import * as Tabs from '@radix-ui/react-tabs';
import { TabList, TabTrigger } from '@/components/Layout/tabs.styled';
import { Loader } from '@/components/Loader';
import { CustomError } from '@/types/interface';

function Home() {
  const [repositories, setRepositories] = useState<RepositoryType[] | undefined>();
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<CustomError | undefined>();

  const fetchTrendingRepos = async () => {
    const githubHelper = new Github();
    const trendingRepositories = await githubHelper.getTrendingRepositories(24);
    const availableLanguages: string[] = [];

    if (trendingRepositories?.error) {
      setError(trendingRepositories.error);
      setIsLoading(false);
      return;
    }

    if (trendingRepositories.items) {
      trendingRepositories?.items?.map((repository) => {
        if (repository?.language) {
          availableLanguages.push(repository.language);
        }
      });

      const uniqueLanguages = [...new Set(availableLanguages)];

      setError(undefined);
      setRepositories(trendingRepositories.items);
      setLanguages(uniqueLanguages);
      setIsLoading(false);
    }
  };

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      const updatedLanguageFilter = selectedLanguages.filter((selectedLanguage) => selectedLanguage !== language);
      setSelectedLanguages(updatedLanguageFilter);
    } else {
      const updatedLanguageFilter = [...selectedLanguages, language];
      setSelectedLanguages(updatedLanguageFilter);
    }
  };

  const toggleFavourite = (id: number) => {
    if (favourites.includes(id)) {
      const updatedFavourites = favourites.filter((favourite) => favourite !== id);
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    } else {
      const updatedFavourites = [...favourites, id];
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingRepos();
    if (typeof window !== 'undefined') {
      const favoritesFromLocalStorage = localStorage.getItem('favourites');
      if (favoritesFromLocalStorage) {
        setFavourites(JSON.parse(favoritesFromLocalStorage));
      }
    }
  }, []);

  if (isLoading) {
    return (
      <ContentContainer>
        <Loader />
      </ContentContainer>
    );
  }
  return (
    <ContentContainer>
      <h1>Trending Repositories from Github (last 7 days)</h1>
      {error ? (
        <div>
          <h2 className="error">{error.name}</h2>
          <p className="error">{error.displayMessage}</p>
        </div>
      ) : null}
      {languages?.length ? (
        <>
          <p className="text--small">Filter by language:</p>
          {languages.map((language) => (
            <FilterItem
              key={language}
              selected={selectedLanguages.includes(language)}
              toggle={() => toggleLanguage(language)}
              text={language}
            />
          ))}
        </>
      ) : null}
      {repositories?.length ? (
        <Tabs.Root defaultValue={ListingCategory.All}>
          <TabList aria-label="Trending repositories">
            <TabTrigger value={ListingCategory.All}>All ({repositories?.length})</TabTrigger>
            <TabTrigger value={ListingCategory.Favourites}>Favourites ({favourites?.length})</TabTrigger>
          </TabList>
          <Tabs.Content value={ListingCategory.All}>
            <RepositoryList
              items={repositories}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              filters={selectedLanguages}
            />
          </Tabs.Content>
          <Tabs.Content value={ListingCategory.Favourites}>
            <RepositoryList
              items={repositories?.filter((repository) => favourites.includes(repository.id))}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              filters={selectedLanguages}
            />
          </Tabs.Content>
        </Tabs.Root>
      ) : null}
    </ContentContainer>
  );
}

export default Home;
