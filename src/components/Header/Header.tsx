import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button component={Link} to="/movies">
          Acceuil
        </Button>
      </Toolbar>
    </AppBar>
  );
};
