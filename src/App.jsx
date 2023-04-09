import React, { useState } from 'react';
import { Container, Form, Checkbox, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    address: '',
    phoneNumber: '',
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event, { name, value, checked }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'agreeTerms' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = 'Please enter your first name';
    }

    if (!formData.lastName) {
      errors.lastName = 'Please enter your last name';
    }

    if (!formData.email) {
      errors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Please enter a password';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.age) {
      errors.age = 'Please enter your age';
    } else if (formData.age < 18) {
      errors.age = 'You must be at least 18 years old to register';
    }

    if (!formData.gender) {
      errors.gender = 'Please select your gender';
    }

    if (!formData.address) {
      errors.address = 'Please enter your address';
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
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
    <Container>
      <h2>
        Registration Form
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          required
          error={formErrors.firstName}
        />
        <Form.Input
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          required
          error={formErrors.lastName}
        />
        <Form.Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          required
          error={formErrors.email}
        />
        <Form.Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleInputChange}
          required
          error={formErrors.password}
          />
          <Form.Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange}
            required
            error={formErrors.confirmPassword}
          />
          <Form.Input
            label="Age"
            name="age"
            type="number"
            value={age}
            onChange={handleInputChange}
            required
            error={formErrors.age}
          />
          <Form.Group inline>
            <label>Gender</label>
            <Form.Radio
              label="Female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={handleInputChange}
              required
              error={formErrors.gender}
            />
            <Form.Radio
              label="Male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleInputChange}
              required
              error={formErrors.gender}
            />
            <Form.Radio
              label="Other"
              name="gender"
              value="other"
              checked={gender === 'other'}
              onChange={handleInputChange}
              required
              error={formErrors.gender}
            />
          </Form.Group>
          <Form.Input
            label="Address"
            name="address"
            value={address}
            onChange={handleInputChange}
            required
            error={formErrors.address}
          />
          <Form.Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            pattern="[0-9]{10}"
            value={phoneNumber}
            onChange={handleInputChange}
            required
            error={formErrors.phoneNumber}
          />
          <Form.Checkbox
            label="I agree to the terms and conditions"
            name="agreeTerms"
            checked={agreeTerms}
            onChange={handleInputChange}
            required
            error={formErrors.agreeTerms}
          />
          <Button type="submit" primary>
            Submit
          </Button>
          <Button type="button" secondary>
            Cancel
          </Button>
        </Form>
      </Container>
      );
      }
      
      export default RegistrationForm;
