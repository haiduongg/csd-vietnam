import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const toast = useToast();
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required')
          .min(4, 'Must be 4 characters or more'),
        email: Yup.string()
          .required('Required')
          .matches(/^\S+@\S+\.\S+$/, 'Please enter a valid email address'),
        message: Yup.string()
          .required('Required')
          .min(10, 'Message must be too short'),
      })}
      onSubmit={(values, actions) => {
        const sendMail = () => {
          return new Promise((resolve, reject) => {
            emailjs
              .sendForm(
                'service_euyqvd6',
                'template_3lwj4t1',
                form.current,
                'RL_HWhqaWeDC367ts'
              )
              .then((response) => {
                // Log res
                resolve(response);
              })
              .catch((error) => {
                // Log error
                reject(error);
              });
          });
        };
        toast.promise(sendMail(), {
          success: {
            position: 'top-right',
            title: 'Successfully',
            description: 'Your message sent successfully',
          },
          error: {
            position: 'top-right',
            title: 'Failed',
            description: 'An error occurred',
          },
          loading: {
            position: 'top-right',
            title: 'Pending',
            description: 'Please wait',
          },
        });

        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as='form' ref={form} spacing={5} onSubmit={formik.handleSubmit}>
          <FormControl
            isRequired
            isInvalid={formik.errors.name && formik.touched.name}
          >
            <FormLabel htmlFor='name'>Your Name</FormLabel>
            <Field
              as={Input}
              id='name'
              name='name'
              type='text'
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder='Enter your name'
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel htmlFor='email'>Email Address</FormLabel>
            <Field
              as={Input}
              id='email'
              name='email'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder='Enter your email'
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={formik.errors.message && formik.touched.message}
          >
            <FormLabel htmlFor='message'>Message</FormLabel>
            <Field
              as={Textarea}
              id='message'
              name='message'
              type='text'
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder='Write something here'
            />
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>

          <Button colorScheme='green' type='submit'>
            Send
          </Button>
        </VStack>
      )}
    </Formik>
  );
}
