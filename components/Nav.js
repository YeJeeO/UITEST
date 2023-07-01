/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from "next/link";

const preventDefault = (event) => event.preventDefault();

export default function Nav() {
  return (
    <Box
    sx={{
            margin:'50px',
      
    
          }}
      onClick={preventDefault}
    >
        <Link as={NextLink} href='/' >Writter  </Link>
        <Link as={NextLink}  href='/second'>Poetry</Link>
      
    </Box>
  );
}