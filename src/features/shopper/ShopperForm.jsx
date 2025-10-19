
import { useState } from 'react';
import CountrySelector from '../../components/CountrySelector.jsx';
import { getDefaultCountry } from '../../constants/countries.js';

export default function ShopperForm({ values, errors = {}, onChange, onBlur, onReset, onSubmit, isSubmitting = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="mx-auto mt-4 sm:mt-6 md:mt-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl px-1 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-2 sm:p-4 md:p-6 lg:p-8">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800 mb-3 sm:mb-4 md:mb-6">
          Create a Shopper Account
        </h2>

        <form onSubmit={onSubmit} className="space-y-2 sm:space-y-4 md:space-y-5 text-left">
          {/* Full Name Field - Full Width */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name*</label>
            <input 
              value={values.name} 
              onChange={(e) => onChange('name', e.target.value)} 
              onBlur={(e) => onBlur && onBlur('name', e.target.value)} 
              type="text" 
              placeholder="Enter your full name" 
              className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} 
              aria-invalid={!!errors.name} 
              aria-describedby={errors.name ? 'name-error' : undefined} 
            />
            {errors.name && <p id="name-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Other Fields - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-5">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email ID*</label>
              <input 
                value={values.email} 
                onChange={(e) => onChange('email', e.target.value)} 
                onBlur={(e) => onBlur && onBlur('email', e.target.value)} 
                type="email" 
                placeholder="Enter your email ID" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                aria-invalid={!!errors.email} 
                aria-describedby={errors.email ? 'email-error' : undefined} 
              />
              {errors.email && <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Address*</label>
              <input 
                value={values.address} 
                onChange={(e) => onChange('address', e.target.value)} 
                onBlur={(e) => onBlur && onBlur('address', e.target.value)} 
                type="text" 
                placeholder="Enter your address" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                aria-invalid={!!errors.address} 
                aria-describedby={errors.address ? 'address-error' : undefined} 
              />
              {errors.address && <p id="address-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">City*</label>
              <input 
                value={values.city} 
                onChange={(e) => onChange('city', e.target.value)} 
                onBlur={(e) => onBlur && onBlur('city', e.target.value)} 
                type="text" 
                placeholder="Enter your city" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.city ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                aria-invalid={!!errors.city} 
                aria-describedby={errors.city ? 'city-error' : undefined} 
              />
              {errors.city && <p id="city-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Town*</label>
              <input 
                value={values.town} 
                onChange={(e) => onChange('town', e.target.value)} 
                onBlur={(e) => onBlur && onBlur('town', e.target.value)} 
                type="text" 
                placeholder="Enter your town" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.town ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                aria-invalid={!!errors.town} 
                aria-describedby={errors.town ? 'town-error' : undefined} 
              />
              {errors.town && <p id="town-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.town}</p>}
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">State*</label>
              <input 
                value={values.state} 
                onChange={(e) => onChange('state', e.target.value)} 
                onBlur={(e) => onBlur && onBlur('state', e.target.value)} 
                type="text" 
                placeholder="Enter your State" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.state ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                aria-invalid={!!errors.state} 
                aria-describedby={errors.state ? 'state-error' : undefined} 
              />
              {errors.state && <p id="state-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.state}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Postal code*</label>
              <input 
                value={values.postalCode} 
                onChange={(e) => onChange('postalCode', e.target.value)} 
                onBlur={(e) => onBlur && onBlur('postalCode', e.target.value)} 
                type="text" 
                placeholder="395007" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.postalCode ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                aria-invalid={!!errors.postalCode} 
                aria-describedby={errors.postalCode ? 'postal-error' : undefined} 
              />
              {errors.postalCode && <p id="postal-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.postalCode}</p>}
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Country*</label>
              <CountrySelector
                selectedCountry={values.selectedCountry || getDefaultCountry()}
                onCountryChange={(country) => {
                  onChange('selectedCountry', country);
                  onChange('country', country.name); // Also update the country name field
                  // Clear mobile number when country changes to avoid format conflicts
                  onChange('mobile', '');
                }}
                onBlur={onBlur}
              />
              {errors.country && <p id="country-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.country}</p>}
            </div>

            <div className="sm:col-span-1">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Mobile No*</label>
              <div className="relative">
                <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 sm:gap-2 pointer-events-none">
                  <span className="text-sm sm:text-lg">{(values.selectedCountry || getDefaultCountry()).flag}</span>
                  <span className="text-xs sm:text-sm text-gray-600">{(values.selectedCountry || getDefaultCountry()).dialCode}</span>
                </div>
                <input 
                  value={values.mobile} 
                  onChange={(e) => onChange('mobile', e.target.value)} 
                  onBlur={(e) => onBlur && onBlur('mobile', e.target.value)} 
                  type="tel" 
                  placeholder={(values.selectedCountry || getDefaultCountry()).code === 'IN' ? "97854 42580" : "Enter mobile number"} 
                  className={`w-full pr-4 sm:pr-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`}
                  style={{ 
                    paddingLeft: `${window.innerWidth < 640 ? 16 + 16 + 4 + ((values.selectedCountry || getDefaultCountry()).dialCode.length * 6) + 4 : 12 + 20 + 8 + ((values.selectedCountry || getDefaultCountry()).dialCode.length * 8) + 8}px` 
                  }}
                  aria-invalid={!!errors.mobile} 
                  aria-describedby={errors.mobile ? 'mobile-error' : undefined} 
                />
              </div>
              {errors.mobile && <p id="mobile-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.mobile}</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password*</label>
              <div className="relative">
                <input 
                  value={values.password} 
                  onChange={(e) => onChange('password', e.target.value)} 
                  onBlur={(e) => onBlur && onBlur('password', e.target.value)} 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a secure password" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} 
                  aria-invalid={!!errors.password} 
                  aria-describedby={errors.password ? 'password-error' : undefined} 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p id="password-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Confirm Password*</label>
              <div className="relative">
                <input 
                  value={values.confirmPassword} 
                  onChange={(e) => onChange('confirmPassword', e.target.value)} 
                  onBlur={(e) => onBlur && onBlur('confirmPassword', e.target.value)} 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Re-enter your password" 
                  className={`w-full px-4 sm:px-3 py-2 sm:py-2.5 pr-8 sm:pr-10 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} 
                  aria-invalid={!!errors.confirmPassword} 
                  aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined} 
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && <p id="confirmPassword-error" className="mt-1 text-xs sm:text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          </div>

          <label className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
            <input checked={values.agree} onChange={(e) => onChange('agree', e.target.checked)} onBlur={(e) => onBlur && onBlur('agree', e.target.checked)} type="checkbox" className={`mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border ${errors.agree ? 'border-red-500 text-red-600 focus:ring-red-600' : 'border-gray-300 text-blue-600 focus:ring-blue-600'}`} aria-invalid={!!errors.agree} aria-describedby={errors.agree ? 'agree-error' : undefined} />
            <span>I Agree <a href="#" className="text-green-600 hover:text-green-800 underline text-xs sm:text-sm">Terms & Conditions</a> and <a href="#" className="text-green-600 hover:text-green-800 underline text-xs sm:text-sm">Privacy Policy</a></span>
          </label>
          {errors.agree && <p id="agree-error" className="-mt-2 text-xs sm:text-sm text-red-600">{errors.agree}</p>}

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-3">
            <button 
              type="button" 
              onClick={onReset} 
              disabled={isSubmitting}
              className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 rounded-lg border border-green-600 text-green-700 bg-white hover:bg-green-50 font-medium text-sm sm:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 rounded-lg bg-[#285A8C] text-white hover:bg-[#234E79] font-medium text-sm sm:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base">Submitting...</span>
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


