export default function ShopperForm({ values, errors = {}, onChange, onReset, onSubmit }) {
  return (
    <div className="mx-auto mt-4 sm:mt-8 w-full max-w-3xl lg:max-w-5xl">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
          Create a Shopper Account
        </h2>

        <form onSubmit={onSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
              <input value={values.name} onChange={(e) => onChange('name', e.target.value)} type="text" placeholder="Enter your name" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID*</label>
              <input value={values.email} onChange={(e) => onChange('email', e.target.value)} type="email" placeholder="Enter your email ID" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
              <input value={values.address} onChange={(e) => onChange('address', e.target.value)} type="text" placeholder="Enter your address" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.address} aria-describedby={errors.address ? 'address-error' : undefined} />
              {errors.address && <p id="address-error" className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
              <input value={values.city} onChange={(e) => onChange('city', e.target.value)} type="text" placeholder="Enter your city" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.city ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.city} aria-describedby={errors.city ? 'city-error' : undefined} />
              {errors.city && <p id="city-error" className="mt-1 text-sm text-red-600">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Town*</label>
              <input value={values.town} onChange={(e) => onChange('town', e.target.value)} type="text" placeholder="Enter your town" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.town ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.town} aria-describedby={errors.town ? 'town-error' : undefined} />
              {errors.town && <p id="town-error" className="mt-1 text-sm text-red-600">{errors.town}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
              <input value={values.state} onChange={(e) => onChange('state', e.target.value)} type="text" placeholder="Enter your State" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.state ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.state} aria-describedby={errors.state ? 'state-error' : undefined} />
              {errors.state && <p id="state-error" className="mt-1 text-sm text-red-600">{errors.state}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Postal code*</label>
              <input value={values.postalCode} onChange={(e) => onChange('postalCode', e.target.value)} type="text" placeholder="395007" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.postalCode ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.postalCode} aria-describedby={errors.postalCode ? 'postal-error' : undefined} />
              {errors.postalCode && <p id="postal-error" className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
              <div className="relative">
                <select value={values.country} onChange={(e) => onChange('country', e.target.value)} className={`w-full appearance-none px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.country ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.country} aria-describedby={errors.country ? 'country-error' : undefined}>
                  <option value="">Select your country</option>
                  <option value="India">India</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-2.5 text-gray-400">▾</span>
              </div>
              {errors.country && <p id="country-error" className="mt-1 text-sm text-red-600">{errors.country}</p>}
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No*</label>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-700 bg-gray-50">
                  <span>🇮🇳</span>
                  <span className="text-sm">+91</span>
                </div>
                <input value={values.mobile} onChange={(e) => onChange('mobile', e.target.value)} type="tel" placeholder="9876543210" className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.mobile ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.mobile} aria-describedby={errors.mobile ? 'mobile-error' : undefined} />
              </div>
              {errors.mobile && <p id="mobile-error" className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
            </div>
            <div className="md:col-span-1" />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
              <input value={values.password} onChange={(e) => onChange('password', e.target.value)} type="password" placeholder="Create a secure password" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.password} aria-describedby={errors.password ? 'password-error' : undefined} />
              {errors.password && <p id="password-error" className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password*</label>
              <input value={values.confirmPassword} onChange={(e) => onChange('confirmPassword', e.target.value)} type="password" placeholder="Re-enter your password" className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'}`} aria-invalid={!!errors.confirmPassword} aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined} />
              {errors.confirmPassword && <p id="confirmPassword-error" className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input checked={values.agree} onChange={(e) => onChange('agree', e.target.checked)} type="checkbox" className={`mt-1 h-4 w-4 rounded border ${errors.agree ? 'border-red-500 text-red-600 focus:ring-red-600' : 'border-gray-300 text-blue-600 focus:ring-blue-600'}`} aria-invalid={!!errors.agree} aria-describedby={errors.agree ? 'agree-error' : undefined} />
            <span>I Agree Terms & Conditions and Privacy Policy</span>
          </label>
          {errors.agree && <p id="agree-error" className="-mt-2 text-sm text-red-600">{errors.agree}</p>}

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
            <button type="button" onClick={onReset} className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg border border-[#285A8C] text-[#285A8C] bg-white hover:bg-blue-50 font-medium transition-colors">Reset</button>
            <button type="submit" className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg bg-[#285A8C] text-white hover:bg-[#234E79] font-medium transition-colors">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}


