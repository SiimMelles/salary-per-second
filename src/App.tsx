import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Home from './components/Home';
import { StyledContainer } from './components/StyledComponents';

const theme = createTheme({
  typography: {
      fontFamily: `"Asap", sans-serif`,
      fontSize: 14,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(180deg, #0B132B 0%, #3A506B 100%)`,
        },
      },
    },
  },
  palette: {
    text: {
      primary: "#FFF"
    },
    primary: {
      main: "#6FFFE9",
      contrastText: "#FFF"
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer>
        <Home />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
