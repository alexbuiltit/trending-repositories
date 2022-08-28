import styled from 'styled-components';

export const RepositoryListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin: ${({ theme }) => theme.spacing.large} 0;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }
`;
