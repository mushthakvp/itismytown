import { useState } from 'react';
import { ShoppingBag, Send, Truck, Package } from 'lucide-react';
import BusinessIcon from '../icons/BusinessIcon.jsx';
import AppHeader from '../components/AppHeader.jsx';
import RoleCard from '../components/RoleCard.jsx';
import ShopperForm from '../features/shopper/ShopperForm.jsx';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hasContinued, setHasContinued] = useState(false);
  const [shopperErrors, setShopperErrors] = useState({});
  const [shopperForm, setShopperForm] = useState({
    name: '',
    address: '',
    email: '',
    town: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const updateShopperField = (field, value) => {
    setShopperForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetShopperForm = () => {
    setShopperForm({
      name: '',
      address: '',
      email: '',
      town: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      agree: false,
    });
    setShopperErrors({});
  };

  const validateShopper = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postalRegex = /^[0-9]{4,10}$/;
    const mobileRegex = /^[0-9]{7,15}$/;

    if (!shopperForm.name.trim()) errors.name = 'Name is required';
    if (!shopperForm.email.trim()) errors.email = 'Email is required';
    else if (!emailRegex.test(shopperForm.email)) errors.email = 'Enter a valid email';

    if (!shopperForm.address.trim()) errors.address = 'Address is required';
    if (!shopperForm.city.trim()) errors.city = 'City is required';
    if (!shopperForm.town.trim()) errors.town = 'Town is required';
    if (!shopperForm.state.trim()) errors.state = 'State is required';
    if (!shopperForm.country.trim()) errors.country = 'Country is required';

    if (!shopperForm.postalCode.trim()) errors.postalCode = 'Postal code is required';
    else if (!postalRegex.test(shopperForm.postalCode)) errors.postalCode = 'Enter a valid postal code';

    if (!shopperForm.mobile.trim()) errors.mobile = 'Mobile number is required';
    else if (!mobileRegex.test(shopperForm.mobile)) errors.mobile = 'Enter a valid mobile number';

    if (!shopperForm.password) errors.password = 'Password is required';
    else if (shopperForm.password.length < 6) errors.password = 'Password must be at least 6 characters';

    if (!shopperForm.confirmPassword) errors.confirmPassword = 'Confirm your password';
    else if (shopperForm.confirmPassword !== shopperForm.password) errors.confirmPassword = 'Passwords do not match';

    if (!shopperForm.agree) errors.agree = 'You must agree to continue';

    setShopperErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const roles = [
    { id: 'Business Owner', icon: BusinessIcon, label: 'Business Owner' },
    { id: 'Shopper', icon: ShoppingBag, label: 'Shopper' },
    { id: 'Sender', icon: Send, label: 'Sender' },
    { id: 'Transporter', icon: Truck, label: 'Transporter' },
    { id: 'Courier', icon: Package, label: 'Courier' }
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

        {/* Shopper Form (only after Continue on Shopper) */}
        {hasContinued && selectedRole === 'Shopper' && (
          <ShopperForm
            values={shopperForm}
            errors={shopperErrors}
            onChange={updateShopperField}
            onReset={resetShopperForm}
            onSubmit={(e) => {
              e.preventDefault();
              if (!validateShopper()) {
                return;
              }
              // Simulate successful submit: return to home (role grid)
              resetShopperForm();
              setSelectedRole(null);
              setHasContinued(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* Home / Continue buttons appear after any role click, before Continue */}
        {selectedRole && !hasContinued && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="w-full sm:w-auto px-8 sm:px-12 py-3 border-2 border-[#285A8C] text-[#285A8C] rounded-lg font-medium hover:bg-blue-50 transition-colors"
              onClick={() => {
                setSelectedRole(null);
                setHasContinued(false);
                resetShopperForm();
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
      </main>
    </div>
  );
}
