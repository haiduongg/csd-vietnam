import PropTypes from 'prop-types';
import { Text, Input } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

InputFeildControl.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.object,

  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default function InputFeildControl(props) {
  const { label, name, placeholder, type, value, onChange, form } = props;
  return (
    <>
      <Text mb='18px' fontWeight={'semibold'} fontSize={'20px'}>
        {label}
      </Text>
      <Controller
        name={name}
        control={form.control}
        render={() => (
          <Input
            placeholder={placeholder}
            size='md'
            name={name}
            type={type ?? 'text'}
            form={form}
            value={value}
            onChange={onChange}
          />
        )}
      ></Controller>
    </>
  );
}
