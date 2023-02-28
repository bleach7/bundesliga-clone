import { ThemeProvider as Provider } from "next-themes";
import { PropsWithChildren } from "react";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider defaultTheme="system" attribute="class">
      {children}
    </Provider>
  );
};
