import styled from 'styled-components';

export const FilterItemButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  box-shadow: ${({ theme }) => theme.defaults.boxShadow};
  padding: 0 ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  transition: all ease 300ms;
  height: 32px;
  font-size: 12px;
  margin-right: ${({ theme }) => theme.spacing.tiny};
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.greyLight};
  }
  .filter_item__icon {
    transition: all ease 300ms;
    height: 16px;
    margin-left: ${({ theme }) => theme.spacing.medium};
  }
  &[data-selected='true'] {
    color: ${({ theme }) => theme.colors.purple};
    background: ${({ theme }) => theme.colors.purpleTransparent};
    .filter_item__icon {
      transform: rotate(45deg);
    }
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.purple};
      }
    }
  }
`;
