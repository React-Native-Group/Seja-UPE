import { StatusBar } from "react-native";
import { create } from "react-test-renderer";
import { NavigationContainer } from "@react-navigation/native";
import { render, RenderOptions } from "@testing-library/react-native"
import React, { ReactElement, JSXElementConstructor, FunctionComponent } from "react";

import { GlobalProvider, ThemeProvider } from "../../src/core/providers";

interface ProviderContextProps {
  children?: React.ReactNode;
}

const ProviderContext: FunctionComponent<ProviderContextProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <StatusBar hidden={false} />
        <NavigationContainer>
          {children}
        </NavigationContainer> 
      </ThemeProvider>
    </GlobalProvider>
  )
}

const customRender = (ui: ReactElement<any, string | JSXElementConstructor<any>>, options?: RenderOptions) => render(ui, { wrapper: ProviderContext, ...options });
const customCreate = (ui: ReactElement<any, string | JSXElementConstructor<any>>) => create((
  <ProviderContext>
    {ui}
  </ProviderContext>
));

export * from "@testing-library/react-native";
export { customRender as render }
export { customCreate as create }