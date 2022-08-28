import styled from 'styled-components';

export const Pill = styled.span`
  font-size: ${({ theme }) => theme.typography.small.size};
  color: ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.colors.purpleTransparent};
  padding: ${({ theme }) => `${theme.spacing.tiny} ${theme.spacing.small}`};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
`;
