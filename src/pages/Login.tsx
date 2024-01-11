import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };

    if (!formData.username) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters with at least one uppercase and one lowercase letter';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your login logic here
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  const handleChange = (e: any) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    });
  };

  return (
    <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: '500px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: 'white',
        }}
      >
        <Typography variant='h2' color={'black'}>
          Movies Time
        </Typography>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={Boolean(errors.username)}
          helperText={errors.username}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          margin="normal"
          sx={{ mt: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;