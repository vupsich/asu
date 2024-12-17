import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton, Container, InputAdornment, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from 'axios';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      // Отправка данных на сервер
      const response = await axios.post('http://localhost:8000/api/register', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        birth_date: birthDate,
        city: city,
        language: language,
        password: password,
        confirm_password: confirmPassword,
      });

      setSuccess("Регистрация прошла успешно!");
      setError(""); // Очистить предыдущие ошибки
    } catch (error) {
      setSuccess("");
      setError(error.response ? error.response.data.detail : "Произошла ошибка");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#d4ebeb',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ mb: 3 }}>
            РЕГИСТРАЦИЯ
          </Typography>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            {/* Имя и Фамилия */}
            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Имя"
                variant="outlined"
                fullWidth
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Фамилия"
                variant="outlined"
                fullWidth
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>

            {/* Email */}
            <TextField
              label="Адрес эл. почты"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* Дата рождения и Пол */}
            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Дата рождения"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                fullWidth
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <FormControl fullWidth required>
                <InputLabel>Пол</InputLabel>
                <Select
                  value={gender}
                  onChange={handleGenderChange}
                  label="Пол"
                >
                  <MenuItem value="Мужской">Мужской</MenuItem>
                  <MenuItem value="Женский">Женский</MenuItem>
                  <MenuItem value="Не указано">Не указано</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Город и Язык */}
            <Box display="flex" gap={2} mb={2}>
              <FormControl fullWidth required>
                <InputLabel>Город</InputLabel>
                <Select
                  value={city}
                  onChange={handleCityChange}
                  label="Город"
                >
                  <MenuItem value="Иркутск">Иркутск</MenuItem>
                  <MenuItem value="Ангарск">Ангарск</MenuItem>
                  <MenuItem value="Братск">Братск</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth required>
                <InputLabel>Язык</InputLabel>
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  label="Язык"
                >
                  <MenuItem value="Английский">Английский</MenuItem>
                  <MenuItem value="Русский">Русский</MenuItem>
                  <MenuItem value="Китайский">Китайский</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Пароль */}
            <TextField
              label="Пароль"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
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

            {/* Повторите пароль */}
            <TextField
              label="Повторите пароль"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 1 }}
            />

            {/* Ошибка или успех */}
            {error && <Typography color="error" align="center">{error}</Typography>}
            {success && <Typography color="primary" align="center">{success}</Typography>}

            {/* Кнопка */}
            <Box textAlign="center" mt={3}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#ACCFB2",
                  color: "#000",
                  "&:hover": { backgroundColor: "#98DA9D" },
                  fontSize: 16,
                  padding: "10px 20px",
                }}
              >
                Создать профиль
              </Button>
            </Box>

            {/* Ссылка на логин */}
            <Typography variant="body2" align="center" mt={2} sx={{ fontSize: '16px' }}>
              Уже есть аккаунт?{" "}
              <a
                href="/login"
                style={{
                  color: "#ACCFB2",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Войти
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegistrationForm;
