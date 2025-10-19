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

// Individual field validation functions for real-time validation
export const validateName = (name) => {
  if (!name?.trim()) {
    return 'Name is required';
  } else if (name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
    return 'Name can only contain letters and spaces';
  }
  return '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.trim()) {
    return 'Email is required';
  } else if (!emailRegex.test(email)) {
    return 'Enter a valid email address';
  }
  return '';
};

export const validateAddress = (address) => {
  if (!address?.trim()) {
    return 'Address is required';
  } else if (address.trim().length < 5) {
    return 'Address must be at least 5 characters';
  }
  return '';
};

export const validateCity = (city) => {
  if (!city?.trim()) {
    return 'City is required';
  } else if (city.trim().length < 2) {
    return 'City must be at least 2 characters';
  }
  return '';
};

export const validateTown = (town) => {
  if (!town?.trim()) {
    return 'Town is required';
  } else if (town.trim().length < 2) {
    return 'Town must be at least 2 characters';
  }
  return '';
};

export const validateState = (state) => {
  if (!state?.trim()) {
    return 'State is required';
  } else if (state.trim().length < 2) {
    return 'State must be at least 2 characters';
  }
  return '';
};

export const validateCountry = (selectedCountry) => {
  if (!selectedCountry || !selectedCountry.name) {
    return 'Country is required';
  }
  return '';
};

export const validatePostalCode = (postalCode) => {
  if (!postalCode?.trim()) {
    return 'Postal code is required';
  } else {
    const postalRegex = /^[0-9]{4,10}$/;
    if (!postalRegex.test(postalCode)) {
      return 'Enter a valid postal code (4-10 digits)';
    }
  }
  return '';
};

export const validateMobile = (mobile, selectedCountry) => {
  if (!mobile?.trim()) {
    return 'Mobile number is required';
  } else if (selectedCountry && selectedCountry.phoneRegex) {
    if (!selectedCountry.phoneRegex.test(mobile)) {
      return `Enter a valid ${selectedCountry.name} mobile number`;
    }
  } else {
    // Fallback validation
    const mobileRegex = /^[0-9]{7,15}$/;
    if (!mobileRegex.test(mobile)) {
      return 'Enter a valid mobile number';
    }
  }
  return '';
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 6) {
    return 'Password must be at least 6 characters';
  } else if (!/(?=.*[a-z])/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  } else if (!/(?=.*[A-Z])/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  } else if (!/(?=.*\d)/.test(password)) {
    return 'Password must contain at least one number';
  }
  return '';
};

export const validateConfirmPassword = (confirmPassword, password) => {
  if (!confirmPassword) {
    return 'Confirm your password';
  } else if (confirmPassword !== password) {
    return 'Passwords do not match';
  }
  return '';
};

export const validateAgree = (agree) => {
  if (!agree) {
    return 'You must agree to the Terms & Conditions and Privacy Policy to continue';
  }
  return '';
};
