import { useState } from 'react';
import { ShoppingBag, Send, Truck, Package } from 'lucide-react';
import BusinessIcon from '../icons/BusinessIcon.jsx';
import AppHeader from '../components/AppHeader.jsx';
import RoleCard from '../components/RoleCard.jsx';
import ShopperForm from '../features/shopper/ShopperForm.jsx';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState('Shopper');
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

        {/* Role Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              id={role.id}
              label={role.label}
              Icon={role.icon}
              isSelected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>

        {/* Shopper Form (shown only when Shopper is selected) */}
        {selectedRole === 'Shopper' && (
          <ShopperForm
            values={shopperForm}
            onChange={updateShopperField}
            onReset={resetShopperForm}
            onSubmit={(e) => e.preventDefault()}
          />
        )}

        {selectedRole !== 'Shopper' && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-8 sm:px-12 py-3 border-2 border-[#285A8C] text-[#285A8C] rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Home
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-12 py-3 bg-[#285A8C] text-white rounded-lg font-medium hover:bg-[#234E79] transition-colors">
              Continue
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
