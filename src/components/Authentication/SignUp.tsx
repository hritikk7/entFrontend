import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            {...register('userName', { required: true })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? 'First Name is required' : ''}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register('email', { required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email ? 'Email is required' : ''}
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
            color="success"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
