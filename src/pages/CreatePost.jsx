import { Helmet } from 'react-helmet-async';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { Header, Footer, FloatButton, InputFeild } from '../components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [desription, setDesription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');

  const API_URL = 'https://api-csd-vietnam.onrender.com/api/v1/blog';

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPost = {
      title: title,
      desription: desription,
      thumbnail: thumbnail,
      tag: tag.split(', '),
      content: content,
    };

    const sendPostRequest = async () => {
      try {
        const resp = await axios.post(API_URL, newPost);
        console.log(resp.data);
        alert('Successfully');
      } catch (err) {
        console.error(err);
      }
    };
    sendPostRequest();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={8}>
        <InputFeild
          label='Title'
          placeholder='Title for post'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputFeild
          label='Description'
          placeholder='Simple description for post'
          value={desription}
          onChange={(e) => setDesription(e.target.value)}
        />
        <InputFeild
          label='Thumbnail'
          placeholder='Enter url thumbail here'
          type='text'
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <InputFeild
          label='Tag'
          placeholder='#Tag'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <div>
          <Text mb='18px' fontWeight={'semibold'} fontSize={'20px'}>
            Content
          </Text>
          <ReactQuill
            theme='snow'
            placeholder='Write something'
            value={content}
            onChange={(newValue) => setContent(newValue)}
            modules={{ toolbar: toolbarOptions }}
            className='h-40'
          />
        </div>
        <Center mt={10}>
          <Button colorScheme='green' type='submit'>
            Create Post
          </Button>
        </Center>
      </Stack>
    </form>
  );
};

export default function CreatePost() {
  return (
    <>
      <Helmet>
        <title>Create New Post</title>
        <meta name='description' content='Create New Post' />
      </Helmet>
      <Header />
      <FloatButton />
      <main className='pt-[72px]'>
        <section className='container mt-8 mb-36'>
          <h1 className='font-semibold text-4xl border-b-2 pb-8 mb-8'>
            Create New Post
          </h1>
          <PostForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
