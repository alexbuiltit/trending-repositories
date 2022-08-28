import styled from 'styled-components';

export const FavouriteButtonWrapper = styled.button`
  background: transparent;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.greyLight};
  }
  &[data-favourited='true'] {
    background-color: ${({ theme }) => theme.colors.redTransparent};
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.red};
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
  .favourite-button__text {
    text-decoration: underline;
  }
  .favourite-button__icon {
    height: 16px;
    width: 16px;
    margin-left: ${({ theme }) => theme.spacing.medium};
  }
`;
