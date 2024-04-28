import React from "react";

const FilterComponent = ({ id, value, options, onChange, placeholder }) => {
  
  return (
    <div className="w-full md:w-3/12 px-1 mb-2 md:mb-0"> {/* Adjust the width and padding as per requirement */}
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="block w-full py-2 pl-3 pr-10 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 hover:border-gray-400 transition ease-in-out duration-150"
    >
      {/* Show "Show all" option when something is selected */}
      {value && <option value="" className="font-bold">Show all</option>}
      {/* Placeholder as the first option */}
      {!value && <option value="" disabled>{placeholder}</option>}
      {/* Map through the options passed to the component */}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  );
};

export default FilterComponent;