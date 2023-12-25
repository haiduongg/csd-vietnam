import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_euyqvd6',
        'template_3lwj4t1',
        form.current,
        'RL_HWhqaWeDC367ts'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type='text' name='user_name' />
      <label>Email</label>
      <input type='email' name='user_email' />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' className='cursor-pointer' />
    </form>
  );
};
