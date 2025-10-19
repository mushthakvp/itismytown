export default function RoleCard({ id, label, Icon, isSelected, onClick }) {
  return (
    <button
      key={id}
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-2xl transition-all ${
        isSelected
          ? 'bg-white border-4 border-[#105617] shadow-lg'
          : 'bg-white border-2 border-transparent hover:border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center mb-2 md:mb-3 ${
          isSelected ? 'bg-[#105617]' : 'bg-gray-100'
        }`}
      >
        <Icon 
          className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ${isSelected ? 'text-white' : 'text-gray-600'}`} 
          filled={isSelected}
        />
      </div>
      <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 text-center">{label}</span>
    </button>
  );
}


