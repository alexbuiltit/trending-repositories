import styled from 'styled-components';

export const RepositoryCardWrapper = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  box-shadow: ${({ theme }) => theme.defaults.boxShadow};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const RepositoryCardContent = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  p {
    font-size: ${({ theme }) => theme.typography.medium.size};
    max-width: 60ch;
  }
`;

export const CardMenu = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    font-size: ${({ theme }) => theme.typography.medium.size};
    margin: 0;
  }
`;

export const CardHeading = styled.h2`
  font-size: ${({ theme }) => theme.typography.large.size};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  a {
    text-overflow: ellipsis;
    overflow: hidden;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greyDark};
    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
