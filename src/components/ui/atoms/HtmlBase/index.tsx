import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ContextsProvider from "app/contexts";

const HtmlBase = ({ children }: any) => {
  const theme = createTheme();

  return (
    <ContextsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <body suppressHydrationWarning>{children}</body>
        </html>
      </ThemeProvider>
    </ContextsProvider>
  );
};
export default HtmlBase;
