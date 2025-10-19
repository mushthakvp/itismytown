export const countries = [
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    dialCode: '+91',
    phoneRegex: /^[6-9]\d{9}$/
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    dialCode: '+971',
    phoneRegex: /^[5-9]\d{7}$/
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    dialCode: '+1',
    phoneRegex: /^\d{10}$/
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    dialCode: '+44',
    phoneRegex: /^[1-9]\d{9}$/
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    dialCode: '+1',
    phoneRegex: /^\d{10}$/
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    dialCode: '+61',
    phoneRegex: /^[2-9]\d{8}$/
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    dialCode: '+49',
    phoneRegex: /^[1-9]\d{10,11}$/
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    dialCode: '+33',
    phoneRegex: /^[1-9]\d{8}$/
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    dialCode: '+81',
    phoneRegex: /^[789]0\d{8}$/
  },
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    dialCode: '+86',
    phoneRegex: /^1[3-9]\d{9}$/
  },
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    dialCode: '+55',
    phoneRegex: /^[1-9]\d{10}$/
  },
  {
    code: 'RU',
    name: 'Russia',
    flag: '🇷🇺',
    dialCode: '+7',
    phoneRegex: /^[3-9]\d{9}$/
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    dialCode: '+39',
    phoneRegex: /^[3]\d{9,10}$/
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    dialCode: '+34',
    phoneRegex: /^[6-9]\d{8}$/
  },
  {
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    dialCode: '+52',
    phoneRegex: /^[1-9]\d{9,10}$/
  },
  {
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    dialCode: '+82',
    phoneRegex: /^[1-9]\d{7,8}$/
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    dialCode: '+65',
    phoneRegex: /^[689]\d{7}$/
  },
  {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    dialCode: '+60',
    phoneRegex: /^[1-9]\d{7,8}$/
  },
  {
    code: 'TH',
    name: 'Thailand',
    flag: '🇹🇭',
    dialCode: '+66',
    phoneRegex: /^[689]\d{8}$/
  },
  {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    dialCode: '+62',
    phoneRegex: /^[8]\d{8,11}$/
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    dialCode: '+966',
    phoneRegex: /^[5]\d{8}$/
  },
  {
    code: 'EG',
    name: 'Egypt',
    flag: '🇪🇬',
    dialCode: '+20',
    phoneRegex: /^[1]\d{9}$/
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    dialCode: '+27',
    phoneRegex: /^[6-9]\d{8}$/
  },
  {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    dialCode: '+234',
    phoneRegex: /^[789]\d{9}$/
  },
  {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    dialCode: '+254',
    phoneRegex: /^[7]\d{8}$/
  }
];

export const getCountryByCode = (code) => {
  return countries.find(country => country.code === code);
};

export const getDefaultCountry = () => {
  return countries.find(country => country.code === 'IN'); // Default to India
};
