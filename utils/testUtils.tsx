import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';

interface ProviderProps {
  children: ReactNode;
}

const AllTheProviders = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
