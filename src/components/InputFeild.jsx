import PropTypes from 'prop-types';
import { Text, Input } from '@chakra-ui/react';

InputFeild.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.object,

  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default function InputFeild(props) {
  const { label, name, placeholder, type, value, onChange, form } = props;
  return (
    <div>
      <Text mb='18px' fontWeight={'semibold'} fontSize={'20px'}>
        {label}
      </Text>
      <Input
        name={name}
        placeholder={placeholder}
        size='md'
        type={type ?? 'text'}
        form={form}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
