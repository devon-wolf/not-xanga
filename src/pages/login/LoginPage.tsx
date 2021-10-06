import {
  Box,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';

// TODO login state, fix label placement

const LoginPage = (): JSX.Element => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Stack direction="column">
        <form
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onSubmit={() => console.log('hi!')}
        >
          <TextField label="Email" type="email" helperText="Type your email, please" />
          <TextField label="Password" type="password" />
          <Button type="submit">Submit</Button>
        </form>
      </Stack>
    </Box>
  );
};

export default LoginPage;
