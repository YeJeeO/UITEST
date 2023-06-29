import type { AppProps } from 'next/app';
import AppBar from '../components/AppBar1';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';


import Drawer, {drawerWidth} from '../components/Drawer';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
  </>;
}
