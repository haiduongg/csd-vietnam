import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ dataTimeline }) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Heading />
      <div className='mt-32'>
        <VerticalTimeline lineColor={'black'}>
          {dataTimeline?.map((timeline) => (
            <VerticalTimelineElement
              key={timeline.year}
              className='vertical-timeline-element--work'
              contentStyle={{ background: '#f58535', color: '#000' }}
              contentArrowStyle={{
                borderRight: '7px solid  #f58535',
              }}
              date={timeline.year}
              iconStyle={{ background: '#f58535', color: '#fff' }}
              icon={<timeline.icon />}
            >
              <h3 className='vertical-timeline-element-title font-bold text-lg text-white'>
                {timeline.title}
              </h3>
              <p className='opacity-85 text-white'>{timeline.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
Timeline.propTypes = {
  dataTimeline: PropTypes.array.isRequired,
};

const Heading = () => {
  return (
    <div className='w-full bg-text text-white py-12'>
      <h2 className='text-h2 text-center font-semibold uppercase '>
        Our Journey
      </h2>
      <p className='mt-3 text-center'>
        &quot; We are a highly skilled and experienced group of mechanical
        engineers passionate about turning innovative ideas into tangible
        reality &quot;
      </p>
    </div>
  );
};

export default Timeline;
