import { useState } from 'react';
import BusinessOwnerIcon from '../icons/BusinessOwnerIcon.jsx';
import ShopperIcon from '../icons/ShopperIcon.jsx';
import SenderIcon from '../icons/SenderIcon.jsx';
import TransporterIcon from '../icons/TransporterIcon.jsx';
import CourierIcon from '../icons/CourierIcon.jsx';
import AppHeader from '../components/AppHeader.jsx';
import RoleCard from '../components/RoleCard.jsx';
import ShopperForm from '../features/shopper/ShopperForm.jsx';
import SuccessModal from '../components/SuccessModal.jsx';
import { getDefaultCountry } from '../constants/countries.js';
import { validateForm, hasErrors, validateName, validateEmail, validateAddress, validateCity, validateTown, validateState, validateCountry, validatePostalCode, validateMobile, validatePassword, validateConfirmPassword, validateAgree } from '../utils/validation.js';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hasContinued, setHasContinued] = useState(false);
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

  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'address':
        error = validateAddress(value);
        break;
      case 'city':
        error = validateCity(value);
        break;
      case 'town':
        error = validateTown(value);
        break;
      case 'state':
        error = validateState(value);
        break;
      case 'selectedCountry':
        error = validateCountry(value);
        break;
      case 'postalCode':
        error = validatePostalCode(value);
        break;
      case 'mobile':
        error = validateMobile(value, shopperForm.selectedCountry);
        break;
      case 'password':
        error = validatePassword(value);
        break;
      case 'confirmPassword':
        error = validateConfirmPassword(value, shopperForm.password);
        break;
      case 'agree':
        error = validateAgree(value);
        break;
      default:
        break;
    }
    
    // Update errors state
    setShopperErrors((prev) => ({
      ...prev,
      [field]: error || undefined
    }));
  };

  const handleFieldBlur = (field, value) => {
    validateField(field, value);
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
        setSelectedRole(null);
        setHasContinued(false);
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAndSubmit();
  };

  const roles = [
    { id: 'Business Owner', icon: BusinessOwnerIcon, label: 'Business Owner' },
    { id: 'Shopper', icon: ShopperIcon, label: 'Shopper' },
    { id: 'Sender', icon: SenderIcon, label: 'Sender' },
    { id: 'Transporter', icon: TransporterIcon, label: 'Transporter' },
    { id: 'Courier', icon: CourierIcon, label: 'Courier' }
  ];

  return (
    <div className="min-h-screen bg-white-50">
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-20 lg:max-w-none lg:mx-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16">
          Select Your Role
        </h1>

        {/* Role Cards (always visible) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              id={role.id}
              label={role.label}
              Icon={role.icon}
              isSelected={selectedRole === role.id}
              onClick={() => {
                setSelectedRole(role.id);
                setHasContinued(false);
              }}
            />
          ))}
        </div>

        {/* Home / Continue buttons appear after any role click, but hide when form is shown */}
        {selectedRole && !hasContinued && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="w-full sm:w-auto px-8 sm:px-12 py-3 border-2 border-[#285A8C] text-[#285A8C] rounded-lg font-medium hover:bg-blue-50 transition-colors"
              onClick={() => {
                setSelectedRole(null);
              }}
            >
              Home
            </button>
            <button
              className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg font-medium transition-colors text-white bg-[#285A8C] hover:bg-[#234E79]"
              aria-disabled={selectedRole !== 'Shopper'}
              title={selectedRole !== 'Shopper' ? 'Select Shopper to continue' : undefined}
              onClick={() => {
                if (selectedRole === 'Shopper') {
                  setHasContinued(true);
                }
              }}
            >
              Continue
            </button>
          </div>
        )}

        {/* Shopper Form appears below role selection when continued */}
        {hasContinued && selectedRole === 'Shopper' && (
          <div className="mt-12">
            <ShopperForm
              values={shopperForm}
              errors={shopperErrors}
              onChange={updateShopperField}
              onBlur={handleFieldBlur}
              onSubmit={handleSubmit}
              onReset={resetShopperForm}
              isSubmitting={isSubmitting}
            />
          </div>
        )}
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
}
