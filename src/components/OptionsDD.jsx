import React, { useState } from 'react';

// export default function OptionsDD({buttonName, options = []}) {
//     console.log(options.length)
//     {
//         return (
//             <div class="relative inline-block text-left">
//           <div>
//             <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
//               {buttonName}
//               <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//               </svg>
//             </button>
//           </div>
        
//           <div class="absolute right-0 z-10  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//             <div class="py-1" role="none">
//                 {options?.map(option => {
//                     return <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{option}</a>
//                 })}
//               {/* <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
//               <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
//               <form method="POST" action="#" role="none">
//                 <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
//               </form> */}
//             </div>
//           </div>
//         </div>
//           )
//     }
 
// }



const OptionsDD = ({ buttonName, options, onSelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="relative inline-block text-left rounded-md">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={handleToggleDropdown}
      >
        {buttonName}
        {/* <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 14l-4-4H5v2a1 1 0 01-2 0V6a1 1 0 012 0v2h1L6 6a1 1 0 112 0l4 4a1 1 0 01.7.3l3 3a1 1 0 010 1.4 1 1 0 01-1.4 0l-2.3-2.3-2.3 2.3a1 1 0 01-1.4 0 1 1 0 010-1.4l3-3a1 1 0 01.7-.3z"
            clipRule="evenodd"
          />
        </svg> */}
        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
      </button>

      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 absolute rounded-md right-0 z-10 bg-white-primary">
            {options.map((option, index) => (
              <div
                key={index}
                className={`${
                  option === selectedOption ? 'bg-gray-100' : ''
                } block px-14 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionsDD;

