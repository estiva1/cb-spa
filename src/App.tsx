import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import Spinner from "./components/spinner/spinner.component";

import { GlobalStyle } from "./global.styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const Home = lazy(() => import("./pages/home/home.component"));
const Article = lazy(() => import("./pages/article/article.component"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
