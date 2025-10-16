import { useState } from 'react';
import { Store, ShoppingBag, Send, Truck, Package } from 'lucide-react';
import logo from '../assets/logoitis.png';

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
    { id: 'Business Owner', icon: Store, label: 'Business Owner' },
    { id: 'Shopper', icon: ShoppingBag, label: 'Shopper' },
    { id: 'Sender', icon: Send, label: 'Sender' },
    { id: 'Transporter', icon: Truck, label: 'Transporter' },
    { id: 'Courier', icon: Package, label: 'Courier' }
  ];

  return (
    <div className="min-h-screen bg-white-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center lg:w-48">
              <img src={logo} alt="ITISMYTOWN" className="h-10" onError={(e) => {
                const target = e.target;
                target.style.display = 'none';
                const next = target.nextSibling;
                if (next && next.style) next.style.display = 'inline';
              }} />
              <span className="text-2xl font-bold" style={{ display: 'none' }}>
                <span className="text-orange-500">IT IS</span>
                <span className="text-blue-600">MYTOWN</span>
              </span>
            </div>
            {/* Search Section */}
            <div className="flex items-center justify-center gap-3 flex-1 mx-8">
              <div className="relative flex-none w-56 md:w-60 lg:w-64">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="w-full h-11 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <div className="relative flex-none w-56 md:w-60 lg:w-64">
                <input
                  type="text"
                  placeholder="Search for products or stores"
                  className="w-full h-11 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <button className="px-6 h-11 bg-[#285A8C] text-white rounded-lg font-medium hover:bg-[#234E79] transition-colors">
                Search
              </button>
            </div>

            {/* Log In */}
            <div className="lg:w-48 flex justify-end">
              <button className="text-[#285A8C] font-medium hover:opacity-90 transition-colors">
                Log In
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Header */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-3">
              {/* Logo */}
              <img src={logo} alt="ITISMYTOWN" className="h-8 sm:h-10 mr-4 sm:mr-6 md:mr-8" onError={(e) => {
                const target = e.target;
                target.style.display = 'none';
                const next = target.nextSibling;
                if (next && next.style) next.style.display = 'inline';
              }} />
              <span className="text-xl sm:text-2xl font-bold" style={{ display: 'none' }}>
                <span className="text-orange-500">IT IS</span>
                <span className="text-blue-600">MYTOWN</span>
              </span>

              {/* Log In */}
              <button className="text-[#285A8C] text-sm sm:text-base font-medium hover:opacity-90 transition-colors ml-4 sm:ml-6 md:ml-8">
                Log In
              </button>
            </div>

            {/* Search Inputs Stacked */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="w-full h-10 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search products or stores"
                  className="w-full h-10 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <button className="px-5 h-10 bg-[#285A8C] text-white rounded-lg font-medium hover:bg-[#234E79] transition-colors text-sm">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-20 lg:max-w-none lg:mx-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16">
          Select Your Role
        </h1>

        {/* Role Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-2xl transition-all ${isSelected
                    ? 'bg-white border-4 border-[#105617] shadow-lg'
                    : 'bg-white border-2 border-transparent hover:border-gray-200 shadow-sm hover:shadow-md'
                  }`}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center mb-2 md:mb-3 ${isSelected ? 'bg-[#105617]' : 'bg-gray-100'
                    }`}
                >
                  <Icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ${isSelected ? 'text-white' : 'text-gray-600'
                      }`}
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 text-center">
                  {role.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Shopper Form (shown only when Shopper is selected) */}
        {selectedRole === 'Shopper' && (
          <div className="mx-auto mt-4 sm:mt-8 w-full max-w-3xl lg:max-w-5xl">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
                Create a Shopper Account
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <input value={shopperForm.name} onChange={(e) => updateShopperField('name', e.target.value)} type="text" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email ID*</label>
                    <input value={shopperForm.email} onChange={(e) => updateShopperField('email', e.target.value)} type="email" placeholder="Enter your email ID" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                    <input value={shopperForm.address} onChange={(e) => updateShopperField('address', e.target.value)} type="text" placeholder="Enter your address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                    <input value={shopperForm.city} onChange={(e) => updateShopperField('city', e.target.value)} type="text" placeholder="Enter your city" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Town*</label>
                    <input value={shopperForm.town} onChange={(e) => updateShopperField('town', e.target.value)} type="text" placeholder="Enter your town" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                    <input value={shopperForm.state} onChange={(e) => updateShopperField('state', e.target.value)} type="text" placeholder="Enter your State" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal code*</label>
                    <input value={shopperForm.postalCode} onChange={(e) => updateShopperField('postalCode', e.target.value)} type="text" placeholder="395007" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                    <div className="relative">
                      <select value={shopperForm.country} onChange={(e) => updateShopperField('country', e.target.value)} className="w-full appearance-none px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option value="">Select your country</option>
                        <option value="India">India</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-2.5 text-gray-400">▾</span>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No*</label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 bg-gray-50">
                        <span>🇮🇳</span>
                        <span className="text-sm">+91</span>
                      </div>
                      <input value={shopperForm.mobile} onChange={(e) => updateShopperField('mobile', e.target.value)} type="tel" placeholder="9876543210" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                  </div>
                  <div className="md:col-span-1" />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                    <input value={shopperForm.password} onChange={(e) => updateShopperField('password', e.target.value)} type="password" placeholder="Create a secure password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password*</label>
                    <input value={shopperForm.confirmPassword} onChange={(e) => updateShopperField('confirmPassword', e.target.value)} type="password" placeholder="Re-enter your password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input checked={shopperForm.agree} onChange={(e) => updateShopperField('agree', e.target.checked)} type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                  <span>I Agree Terms & Conditions and Privacy Policy</span>
                </label>

                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
                  <button type="button" onClick={resetShopperForm} className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg border border-[#285A8C] text-[#285A8C] bg-white hover:bg-blue-50 font-medium transition-colors">Reset</button>
                  <button type="submit" className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg bg-[#285A8C] text-white hover:bg-[#234E79] font-medium transition-colors">Submit</button>
                </div>
              </form>
            </div>
        </div>
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
