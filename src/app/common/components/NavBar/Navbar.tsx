import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Home } from '@mui/icons-material';

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Home />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              Crypto Viewer
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
