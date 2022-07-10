import { createTheme, ThemeProvider } from '@mui/material';
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
  palette: {
    text: {
      primary: "#FFF"
    },
    background: {
      default: "#111111"
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
      <StyledContainer maxWidth="sm">
        <Home />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
