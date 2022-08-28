import { Octokit } from 'octokit';

export class Github {
  public itemsToFetch = 16;

  public async searchRepositories() {
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

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  }

  public async getTrendingRepositories(count?: number) {
    if (count) {
      this.itemsToFetch = count;
    }

    const trendingRepositories = await this.searchRepositories();
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
    return repositoriesDataMapped;
  }
}
