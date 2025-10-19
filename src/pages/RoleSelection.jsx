import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessOwnerIcon from '../icons/BusinessOwnerIcon.jsx';
import ShopperIcon from '../icons/ShopperIcon.jsx';
import SenderIcon from '../icons/SenderIcon.jsx';
import TransporterIcon from '../icons/TransporterIcon.jsx';
import CourierIcon from '../icons/CourierIcon.jsx';
import AppHeader from '../components/AppHeader.jsx';
import RoleCard from '../components/RoleCard.jsx';

export default function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

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
              }}
            />
          ))}
        </div>

        {/* Home / Continue buttons appear after any role click */}
        {selectedRole && (
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
                  navigate('/shopper-registration');
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
