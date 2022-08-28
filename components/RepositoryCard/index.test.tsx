import { RepositoryType } from '@/types/types';
import { render, screen } from '@/utils/testUtils';
import { RepositoryCard } from '.';

const mockFavourite = jest.fn();

const repositoryCardProps: RepositoryType = {
  name: 'github-trending',
  description: 'A repo to display the trending items in GitHub',
  starCount: 1,
  language: 'TypeScript',
  id: 42,
  favourite: false,
  link: 'https://github.com/alexbuiltit',
  toggleFavourite: () => mockFavourite,
};

describe('RepositoryCard', () => {
  it('should render a RepositoryCard as expected', () => {
    const { container } = render(<RepositoryCard {...repositoryCardProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a RepositoryCard that has been favourited', () => {
    repositoryCardProps.favourite = true;
    const { container } = render(<RepositoryCard {...repositoryCardProps} />);
    expect(screen.getByTestId('favourite-button')).toHaveAttribute('data-favourited', 'true');
    expect(container).toMatchSnapshot();
  });
});
