import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    address: "",
    phoneNumber: "",
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "agreeTerms" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "Please enter your first name";
    }

    if (!formData.lastName) {
      errors.lastName = "Please enter your last name";
    }

    if (!formData.email) {
      errors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Please enter a password";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.age) {
      errors.age = "Please enter your age";
    } else if (formData.age < 18) {
      errors.age = "You must be at least 18 years old to register";
    }

    if (!formData.gender) {
      errors.gender = "Please select your gender";
    }

    if (!formData.address) {
      errors.address = "Please enter your address";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = "You must agree to the terms and conditions";
    }

    setFormErrors(errors);

    // Submit form data if there are no errors
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    age,
    gender,
    address,
    phoneNumber,
    agreeTerms,
  } = formData;

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" mb={3}>
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",


        }}
      >
        <Grid container spacing={4} marginLeft={45}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }} elevation={3}>
              <Typography variant="h5" mb={3}>
                Registration Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      variant="outlined"
                      margin="normal"
                      value={firstName}
                      onChange={handleInputChange}
                      required
                      error={formErrors.firstName}
                      helperText={formErrors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      margin="normal"
                      value={lastName}
                      onChange={handleInputChange}
                      required
                      error={formErrors.lastName}
                      helperText={formErrors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      margin="normal"
                      value={email}
                      onChange={handleInputChange}
                      type="email"
                      required
                      error={formErrors.email}
                      helperText={formErrors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      variant="outlined"
                      margin="normal"
                      value={password}
                      onChange={handleInputChange}
                      type="password"
                      required
                      error={formErrors.password}
                      helperText={formErrors.password}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      name="confirmPassword"
                      variant="outlined"
                      margin="normal"
                      value={confirmPassword}
                      onChange={handleInputChange}
                      type="password"
                      required
                      error={formErrors.confirmPassword}
                      helperText={formErrors.confirmPassword}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Age"
                      name="age"
                      variant="outlined"
                      margin="normal"
                      value={age}
                      onChange={handleInputChange}
                      type="number"
                      required
                      error={formErrors.age}
                      helperText={formErrors.age}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth required error={formErrors.gender}>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="gender"
                        value={gender}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="Other"
                        />
                      </RadioGroup>
                      {formErrors.gender && (
                        <FormHelperText>{formErrors.gender}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      variant="outlined"
                      margin="normal"
                      value={address}
                      onChange={handleInputChange}
                      required
                      error={formErrors.address}
                      helperText={formErrors.address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl required error={formErrors.agreeTerms}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            name="agreeTerms"
                            checked={agreeTerms}
                            onChange={handleInputChange}
                          />
                        }
                        label="I agree to the terms and conditions"
                      />
                      {formErrors.agreeTerms && (
                        <FormHelperText>{formErrors.agreeTerms}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                    >
                      Submit
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      type="submit"
                      sx={{ ml: 2 }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default RegistrationForm;
