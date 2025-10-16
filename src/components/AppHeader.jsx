import logo from '../assets/logoitis.png';

export default function AppHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center lg:w-48">
            <img src={logo} alt="ITISMYTOWN" className="h-10" />
          </div>

          <div className="flex items-center justify-center gap-3 flex-1 mx-8">
            <div className="relative flex-none w-56 md:w-60 lg:w-64">
              <input type="text" placeholder="Search Location" className="w-full h-11 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <div className="relative flex-none w-56 md:w-60 lg:w-64">
              <input type="text" placeholder="Search for products or stores" className="w-full h-11 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <button className="px-6 h-11 bg-[#285A8C] text-white rounded-lg font-medium hover:bg-[#234E79] transition-colors">Search</button>
          </div>

          <div className="lg:w-48 flex justify-end">
            <button className="text-[#285A8C] font-medium hover:opacity-90 transition-colors">Log In</button>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-3">
            <img src={logo} alt="ITISMYTOWN" className="h-8 sm:h-10" />
            <button className="text-[#285A8C] text-sm sm:text-base font-medium hover:opacity-90 transition-colors">Log In</button>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <input type="text" placeholder="Search Location" className="w-full h-10 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input type="text" placeholder="Search products or stores" className="w-full h-10 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <button className="px-5 h-10 bg-[#285A8C] text-white rounded-lg font-medium hover:bg-[#234E79] transition-colors text-sm">Search</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


