import PropTypes from 'prop-types';
import { useState } from 'react';

TextInput.propTypes = {
  inputName: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

function TextInput({ inputName, label, placeholder }) {
  const [textPlaceholder, setTextPlaceholder] = useState(' ');
  return (
    <div className='relative h-11 w-full'>
      <input
        className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
        placeholder={textPlaceholder}
        onFocus={() => setTextPlaceholder(placeholder)}
        onBlur={() => setTextPlaceholder(' ')}
        name={inputName}
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-primary-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-primary-900 peer-focus:after:scale-x-100 peer-focus:after:border-primary-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
}

export default TextInput;
