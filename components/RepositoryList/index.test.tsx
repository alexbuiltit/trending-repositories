import { RepositoryListType } from '@/types/types';
import { render, screen } from '@/utils/testUtils';
import { RepositoryList } from '.';

const repositoryListProps: RepositoryListType = {
  items: [
    {
      name: 'github-trending',
      description: 'A repo to display the trending items in GitHub',
      starCount: 1,
      language: 'TypeScript',
      id: 42,
      favourite: false,
      link: 'https://github.com/alexbuiltit',
    },
    {
      name: 'another-repo',
      description: 'An example repository',
      starCount: 1,
      language: 'Java',
      id: 4910,
      favourite: false,
      link: 'https://github.com',
    },
    {
      name: 'just-one-more',
      description: 'The final example repository',
      starCount: 1,
      language: 'Go',
      id: 4911120,
      favourite: false,
      link: 'https://github.com',
    },
  ],
  filters: [],
};

describe('RepositoryList', () => {
  it('should render a list of repositories as expected', () => {
    const { container } = render(<RepositoryList {...repositoryListProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should only show a list of TypeScript repositories', () => {
    repositoryListProps.filters = ['TypeScript'];
    const { container } = render(<RepositoryList {...repositoryListProps} />);
    expect(screen.queryByText('Java')).not.toBeInTheDocument();
    expect(screen.queryByText('Go')).not.toBeInTheDocument();
    expect(screen.queryAllByText('TypeScript').length).toEqual(1);
    expect(container).toMatchSnapshot();
  });
});
