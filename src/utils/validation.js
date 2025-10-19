export const validateForm = (formData) => {
  const errors = {};
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Enter a valid email address';
  }

  // Name validation
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
    errors.name = 'Name can only contain letters and spaces';
  }

  // Address validation
  if (!formData.address?.trim()) {
    errors.address = 'Address is required';
  } else if (formData.address.trim().length < 5) {
    errors.address = 'Address must be at least 5 characters';
  }

  // City validation
  if (!formData.city?.trim()) {
    errors.city = 'City is required';
  } else if (formData.city.trim().length < 2) {
    errors.city = 'City must be at least 2 characters';
  }

  // Town validation
  if (!formData.town?.trim()) {
    errors.town = 'Town is required';
  } else if (formData.town.trim().length < 2) {
    errors.town = 'Town must be at least 2 characters';
  }

  // State validation
  if (!formData.state?.trim()) {
    errors.state = 'State is required';
  } else if (formData.state.trim().length < 2) {
    errors.state = 'State must be at least 2 characters';
  }

  // Country validation
  if (!formData.selectedCountry || !formData.selectedCountry.name) {
    errors.country = 'Country is required';
  }

  // Postal code validation
  if (!formData.postalCode?.trim()) {
    errors.postalCode = 'Postal code is required';
  } else {
    const postalRegex = /^[0-9]{4,10}$/;
    if (!postalRegex.test(formData.postalCode)) {
      errors.postalCode = 'Enter a valid postal code (4-10 digits)';
    }
  }

  // Mobile validation
  if (!formData.mobile?.trim()) {
    errors.mobile = 'Mobile number is required';
  } else if (formData.selectedCountry && formData.selectedCountry.phoneRegex) {
    if (!formData.selectedCountry.phoneRegex.test(formData.mobile)) {
      errors.mobile = `Enter a valid ${formData.selectedCountry.name} mobile number`;
    }
  } else {
    // Fallback validation
    const mobileRegex = /^[0-9]{7,15}$/;
    if (!mobileRegex.test(formData.mobile)) {
      errors.mobile = 'Enter a valid mobile number';
    }
  }

  // Password validation
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  } else if (!/(?=.*[a-z])/.test(formData.password)) {
    errors.password = 'Password must contain at least one lowercase letter';
  } else if (!/(?=.*[A-Z])/.test(formData.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (!/(?=.*\d)/.test(formData.password)) {
    errors.password = 'Password must contain at least one number';
  }

  // Confirm password validation
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Confirm your password';
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Terms agreement validation
  if (!formData.agree) {
    errors.agree = 'You must agree to the Terms & Conditions and Privacy Policy to continue';
  }

  return errors;
};

export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0;
};
