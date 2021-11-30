import { StatusBar } from 'react-native';
import { render, RenderOptions } from '@testing-library/react-native'
import React, { ReactElement, JSXElementConstructor, FunctionComponent } from 'react';

import { GlobalProvider, ThemeProvider } from '../../src/core/providers';

interface ProviderContextProps {
  children?: React.ReactNode;
}

const ProviderContext: FunctionComponent<ProviderContextProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <StatusBar hidden={false} />
        {children}
      </ThemeProvider>
    </GlobalProvider>
  )
}

const customRender = (ui: ReactElement<any, string | JSXElementConstructor<any>>, options?: RenderOptions) => render(ui, { wrapper: ProviderContext, ...options });

export * from '@testing-library/react-native';
export { customRender as render }