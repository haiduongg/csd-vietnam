import { Helmet } from 'react-helmet';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { Header, Footer, FloatButton, InputFeild } from '../components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [desription, setDesription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  return (
    <form>
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
          type='file'
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.file)}
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
          />
        </div>
        <Center mt='5px'>
          <Button colorScheme='green'>Create Post</Button>
        </Center>
      </Stack>
    </form>
  );
};

export default function CreatePost() {
  return (
    <>
      <Helmet>
        <title>CSD Vietnam | Highly skilled and experienced group</title>
        <meta name='description' content='Helmet application' />
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
