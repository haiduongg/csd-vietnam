/* eslint-disable react/prop-types */
// import Slider from './Slider';

const Content = (props) => {
  return (
    <section>
      <h1 className='text-center font-bold mt-8'>{props.name}</h1>
      <div className='mt-8'>{/* <Slider dataImage={props.dataImage} /> */}</div>
      <div className='content__inner-main'>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </div>
    </section>
  );
};

export default Content;
