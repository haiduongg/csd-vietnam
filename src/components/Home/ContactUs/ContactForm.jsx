import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from '../../TextInput';

ContactForm.propTypes = {};

export default function ContactForm() {
  const notifySucess = () => toast.success('Send message sucessfully!');
  const notifyError = () => toast.error('Send message failed!');
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
          notifySucess();
        },
        (error) => {
          console.log(error.text);
          notifyError();
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='mt-2 grid grid-cols-2 gap-x-14 gap-y-9'>
        <TextInput
          label='Name'
          placeholder={'Ex: Cao Hai Duong'}
          inputName='user_name'
        />
        <TextInput
          label='Email'
          placeholder={'Ex: caohaiduong@gmail.com'}
          inputName='user_email'
        />
        <div className='col-span-2'>
          <TextInput
            label='Message'
            placeholder={'Write your message'}
            inputName='message'
          />
        </div>
        <motion.div
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.95 }}
          className='col-span-2 mx-auto mt-10'
        >
          <input
            type='submit'
            value='Send'
            className='font-semibold text-white cursor-pointer bg-red-300 px-10 py-2  uppercase rounded-xl bg-gradient-to-r hover:bg-gradient-to-l from-primary-800 to-primary-900'
          />
        </motion.div>
        <ToastContainer
          position='top-right'
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </div>
    </form>
  );
}
