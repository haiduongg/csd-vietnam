import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Stack,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ContactForm() {
  const feilds = [
    {
      id: 1,
      label: 'Your Name',
      name: 'name',
      placeholder: 'Name',
      errorMessage: 'This is required',
    },
    {
      id: 2,
      label: 'Your Email',
      name: 'email',
      placeholder: 'Email',
      errorMessage: 'This is required',
    },
  ];
  const initValues = {
    name: '',
    email: '',
    message: '',
  };
  const [initialValue, setInitialValue] = useState(initValues);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1500);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {feilds?.map((feild) => (
          <FormControl isInvalid={errors.name} key={feild.id} isRequired>
            <FormLabel htmlFor={feild.name}>{feild.label}</FormLabel>
            <Input
              id={feild.name}
              placeholder={feild.placeholder}
              {...register(feild.name, {
                required: feild.errorMessage,
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        ))}
        <FormControl isInvalid={errors.name} isRequired>
          <FormLabel htmlFor='message'>Message</FormLabel>
          <Textarea
            id='message'
            placeholder='Write something'
            {...register('message', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Center mt={3}>
        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting}
          type='submit'
        >
          Submit
        </Button>
      </Center>
    </form>
  );
}
