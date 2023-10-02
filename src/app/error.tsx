"use client";

import { Box, Button, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

export default function error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {

  const handleRefresh = (): void => reset();

  return (
    <Box
      className="animate__animated animate__fadeIn"
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <ErrorOutline sx={{ fontSize: 54 }} />
      <Typography>
        Something went wrong :(
      </Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={handleRefresh}
      >
        Reload
      </Button>
    </Box>
  );
}
