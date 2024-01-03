import { useState } from 'react';
import { Box, Button, Center, Text, Textarea } from '@chakra-ui/react';
import { InputFeild } from '../../../components';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const form = useForm({
  //   defaultValues: {
  //     title: '',
  //   },
  // });
  // const handleSubmit = (values) => {
  //   console.log('Form: ', values);
  // };
  return (
    <form>
      <Box className='mt-2 lg:grid lg:grid-cols-2 gap-x-3 gap-y-9'>
        <InputFeild
          label='Your Name'
          placeholder={'Input your name'}
          name='title'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputFeild
          label='Your Email'
          name='email'
          placeholder={'Input your email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box className='col-span-2'>
          <Text mb='18px' fontWeight={'semibold'} fontSize={'20px'}>
            Message
          </Text>
          <Textarea
            placeholder='Write something to us'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <Center className='col-span-2'>
          <Button colorScheme='green' variant='solid' size={'md'} type='submit'>
            Send
          </Button>
        </Center>
      </Box>
    </form>
  );
}
