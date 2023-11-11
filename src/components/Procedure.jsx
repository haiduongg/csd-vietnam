import PropTypes from 'prop-types';
import procedureImg from '../assets/images/procedure.png';
import { MdStar } from 'react-icons/md';
import { Button } from 'antd';

const ProcedureContent = ({ dataProcedure }) => {
  return (
    <div>
      <ul>
        {dataProcedure?.map((item) => (
          <li
            key={item.id}
            className='mt-10 first:mt-5 flex gap-6 items-center justify-center'
          >
            <p className='uppercase text-center bg-primary rounded-xl p-3 text-sm text-white'>
              Step <span className='font-bold'>{item.id}</span>
            </p>
            <p className='text-justify rounded-lg border-solid border-2 p-3'>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
ProcedureContent.propTypes = {
  dataProcedure: PropTypes.array.isRequired,
};

function Procedure() {
  const procedure = [
    {
      id: 1,
      title: 'Idea Reception',
      description:
        "We begin by receiving your concept and understanding your vision. Our team collaborates closely with you to grasp your project's objectives and unique requirements.",
    },
    {
      id: 2,
      title: '3D Modeling and Technical Drawings',
      description:
        'Once we have a clear understanding of your idea, our experts proceed to create detailed 3D models and technical drawings. These serve as the foundation for the design and engineering aspects of the project.',
    },
    {
      id: 3,
      title: 'Inspection and Handover',
      description:
        'After the 3D models and technical drawings are complete, we conduct thorough quality checks to ensure that all aspects meet the specified standards. Upon successful validation, we deliver the project to you.',
    },
    {
      id: 4,
      title: 'Production',
      description:
        'Depending on the nature of your project, this step can involve the actual production, fabrication, or realization of the design. We tailor our production processes to align with your specific project requirements and goals.',
    },
    {
      id: 5,
      title: 'Acceptance Testing',
      description:
        "The final phase involves acceptance testing, which is performed based on your project's individual needs and criteria. We work closely with you to conduct the necessary testing and ensure that the end product aligns with your expectations.",
    },
  ];
  return (
    <div>
      <h3 className='uppercase font-bold text-center'>
        How do we work ?
      </h3>
      <div className='mt-6 flex items-start justify-start gap-5'>
        <div className='max-w-[450px]'>
          <img
            src={procedureImg}
            alt='Quy trinh lam viec tai CSD'
            width={450}
            height={900}
          />
        </div>
        <div className='max-w-[790px]'>
          <ProcedureContent dataProcedure={procedure} />
        </div>
      </div>
      <div className='mt-6 text-primary font-semibold text-justify'>
        <MdStar className='inline mr-1 ' size={20} />
        <p className='inline'>
          Please note that the last two stages, Production and Acceptance
          Testing, are flexible and can be adjusted to suit the specific demands
          and preferences of our clients. Our commitment is to work closely with
          you throughout the process to achieve the best possible outcome for
          your project.
        </p>
      </div>
    </div>
  );
}

export default Procedure;
