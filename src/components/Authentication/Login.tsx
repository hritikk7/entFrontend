import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            {...register('username', { required: true })}
            error={Boolean(errors.username)}
            helperText={errors.username ? 'Username is required' : ''}
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            margin="normal"
            {...register('password', { required: true })}
            error={Boolean(errors.password)}
            helperText={errors.password ? 'Password is required' : ''}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
