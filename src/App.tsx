import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

// import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import './styles/variables.css';
import './styles/main.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline />
      <Container style={{ marginTop: '80px' }}>
        <BrowserRouter>
          <Header />
          <Routes>            
            <Route path="/movies" element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            {/* <Route path="/" element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
