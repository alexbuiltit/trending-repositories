import { RepositoryDataMapped, RepositorySearchResult } from '@/types/types';
import { Octokit } from 'octokit';

export class Github {
  public itemsToFetch = 16;

  public async searchRepositories(): Promise<RepositorySearchResult> {
    try {
      const octokit = new Octokit();
      const sevenDaysAgo: Date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const formattedDate: string = sevenDaysAgo.toISOString().split('T')[0];

      const response = await octokit.request('GET /search/repositories', {
        sort: 'stars',
        order: 'desc',
        q: `created:>${formattedDate}`,
        per_page: this.itemsToFetch,
        page: 1,
      });

      const data: RepositorySearchResult = await response.data;

      return data;
    } catch (error) {
      return {
        items: [],
        success: false,
        error: {
          ...(error as Error),
          displayMessage: 'Unable to fetch trending repositories at this time, please try again later.',
        },
      };
    }
  }

  public async getTrendingRepositories(count?: number): Promise<RepositoryDataMapped> {
    if (count) {
      this.itemsToFetch = count;
    }
    const trendingRepositories = await this.searchRepositories();
    if (trendingRepositories.error) {
      return {
        error: trendingRepositories.error,
      };
    }

    const repositoriesDataMapped = trendingRepositories?.items.map((item) => {
      return {
        name: item.name,
        description: item.description,
        starCount: item.stargazers_count,
        id: item.id,
        language: item?.language,
        link: item.html_url,
      };
    });
    return {
      items: repositoriesDataMapped,
    };
  }
}
