import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader.jsx';
import ShopperForm from '../features/shopper/ShopperForm.jsx';
import SuccessModal from '../components/SuccessModal.jsx';
import { getDefaultCountry } from '../constants/countries.js';
import { validateForm, hasErrors } from '../utils/validation.js';

export default function ShopperRegistration() {
  const navigate = useNavigate();
  const [shopperErrors, setShopperErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const defaultCountry = getDefaultCountry();
  const [shopperForm, setShopperForm] = useState({
    name: '',
    address: '',
    email: '',
    town: '',
    city: '',
    state: '',
    country: defaultCountry.name,
    postalCode: '',
    mobile: '',
    selectedCountry: defaultCountry,
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const updateShopperField = (field, value) => {
    setShopperForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetShopperForm = () => {
    const defaultCountry = getDefaultCountry();
    setShopperForm({
      name: '',
      address: '',
      email: '',
      town: '',
      city: '',
      state: '',
      country: defaultCountry.name,
      postalCode: '',
      mobile: '',
      selectedCountry: defaultCountry,
      password: '',
      confirmPassword: '',
      agree: false,
    });
    setShopperErrors({});
  };

  const validateAndSubmit = async () => {
    // Clear previous errors
    setShopperErrors({});
    
    // Validate form
    const errors = validateForm(shopperForm);
    
    if (hasErrors(errors)) {
      setShopperErrors(errors);
      // Scroll to first error field
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(`[aria-describedby="${firstErrorField}-error"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      return;
    }

    // If validation passes, proceed with submission
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        resetShopperForm();
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      // You could show an error message here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAndSubmit();
  };

  return (
    <div className="min-h-screen bg-white-50">
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-20">
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#285A8C] hover:text-[#234E79] font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Role Selection
          </button>
        </div>

        {/* Shopper Form */}
        <ShopperForm
          values={shopperForm}
          errors={shopperErrors}
          onChange={updateShopperField}
          onReset={resetShopperForm}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </main>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
}
