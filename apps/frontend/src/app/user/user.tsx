import { Box, Button, Container, TextField } from '@mui/material';
import styles from './user.module.css';
import axios from 'axios';
import React from 'react';

// import { CreateUserDto } from '@mfe-monorepo/user';
/* eslint-disable-next-line */
export interface UserProps {}

export function User(props: UserProps) {
  const [createUserSuccessful, setCreateUserSuccessful] = React.useState(false);

  async function createUser(data: any) {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3333/api/user',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    const result = await axios(config);
    const message = result.data;
    console.log(message);
    setCreateUserSuccessful(true);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = event.currentTarget as unknown;
    // createUser(data as CreateUserDto);
  };

  return (
    <div className={styles['container']}>
      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <h1>Let's Create a New User!</h1>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          {createUserSuccessful && <h1>User successfully created!</h1>}
        </Box>
      </Container>
    </div>
  );
}

export default User;
