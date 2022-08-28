import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabList = styled(Tabs.List)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.greyLight};
`;

export const TabTrigger = styled(Tabs.Trigger)`
  background: transparent;
  border: none;
  padding: 16px 8px;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.greyLight};
  transform: translate(0, 2px);
  font-size: ${({ theme }) => theme.typography.medium.size};
  cursor: pointer;
  &[data-state='active'],
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    border-bottom-color: ${({ theme }) => theme.colors.blue};
  }
`;
