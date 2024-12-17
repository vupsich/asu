import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, Container, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Импортируем useAuth

const AuthorizationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Получаем функцию login из контекста

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Ошибка авторизации. Проверьте данные.');
      }

      const data = await response.json();
      console.log('Успешный вход:', data);
      login(data.access_token); // Вызов функции login из контекста

      navigate('/'); // Редирект на главную страницу
    } catch (err) {
      console.error('Ошибка:', err);
      setError(err.message);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#d4ebeb' }}>
      <Container maxWidth="xs">
        <Box sx={{ backgroundColor: '#fff', padding: 4, borderRadius: 2, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ mb: 3 }}>
            АВТОРИЗАЦИЯ
          </Typography>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleLogin}>
            {/* Email */}
            <TextField
              label="Адрес эл. почты"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
            />

            {/* Пароль */}
            <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
              <TextField
                label="Пароль"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Ошибка */}
            {error && (
              <Typography color="error" align="center" sx={{ fontSize: '14px', mb: 2 }}>
                {error}
              </Typography>
            )}

            {/* Кнопка "Войти" */}
            <Box textAlign="center" mt={3}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#ACCFB2', color: '#000', '&:hover': { backgroundColor: '#98DA9D' }, fontSize: 16, padding: '10px 35px' }}
              >
                Войти
              </Button>
            </Box>

            {/* Ссылки на регистрацию и смену пароля */}
            <Typography variant="body2" align="center" mt={2} sx={{ fontSize: '16px' }}>
              Нет аккаунта?{' '}
              <a
                href="/register"
                style={{
                  color: '#ACCFB2',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Зарегистрироваться
              </a>
            </Typography>
            <Typography variant="body2" align="center" mt={1} sx={{ fontSize: '16px' }}>
              Забыли пароль?{' '}
              <a
                href="/"
                style={{
                  color: '#ACCFB2',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Сменить пароль
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AuthorizationForm;
