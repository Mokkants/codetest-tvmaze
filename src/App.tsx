import React from "react";
import Router from "./routes";

import { createTheme, ThemeProvider } from "@mui/material";
import { ErrorSnackbar } from "./shared/components";
import { newTheme } from "./theme";

const muiTheme = createTheme(newTheme);

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="App" data-testid="app">
        <Router />
        <ErrorSnackbar />
      </div>
    </ThemeProvider>
  );
};

export default App;
