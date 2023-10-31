import PropTypes from 'prop-types';

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
TextInput.defaultProps = {
  type: 'text',
  placeholder: 'Input here',
};

function TextInput({ name, type, placeholder }) {
  return (
    <div>
      <label htmlFor='input'>{name}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
