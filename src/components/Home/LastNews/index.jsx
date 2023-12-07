import { BiRightArrowAlt } from 'react-icons/bi';
import { Button } from 'antd';
import LastNewsList from './LastNewsList';
import thumbnail from '/assets/img/logo.webp';

export default function LastNews() {
  const lastNewsList = [
    {
      id: 1,
      createAt: '2023, 10th October',
      thumbnail: thumbnail,
      tag: 'New orders',
      description: 'Rolling mill revamping at CMC Poland',
    },
    {
      id: 2,
      createAt: '2023, 10th October',
      thumbnail: thumbnail,
      tag: 'New orders',
      description: 'Rolling mill revamping at CMC Poland',
    },
    {
      id: 3,
      createAt: '2023, 10th October',
      thumbnail: thumbnail,
      tag: 'New orders',
      description: 'Rolling mill revamping at CMC Poland',
    },
  ];
  return (
    <div>
      <div className='heading flex items-center justify-between'>
        <div className='flex items-center justify-start gap-5'>
          <div className='w-12 h-1 bg-black'></div>
          <h4 className='font-bold uppercase text-center'>Last News</h4>
        </div>
        <Button
          type='text'
          size='large'
          className='font-bold flex items-center justify-center gap-3'
          href='https://blogs.csdvietnam.com'
        >
          <span>View all news</span>
          <BiRightArrowAlt size={25} />
        </Button>
      </div>
      <div className='mt-6'>
        <LastNewsList dataList={lastNewsList} />
      </div>
    </div>
  );
}
