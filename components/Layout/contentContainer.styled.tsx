import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: block;
  max-width: ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.large}`};
`;
