/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div className='w-full h-full'>
      <a
        href={props.link || null}
        target={props.target || ''}
        title={props.name || 'Button'}
      >
        <button
          className={`${
            (props.type === 'fill' &&
              'bg-primary text-white hover:bg-opacity-90') ||
            (props.type === 'outline' &&
              `bg-transparent text-dark border-solid border-[2px] border-primary hover:bg-primary hover:text-white dark:text-white dark:hover:text-dark duration-200 ${
                props.show ? '!bg-primary text-white hover:opacity-75' : ''
              }`) ||
            ' hover:bg-hover-light'
          } inline-flex items-center justify-center rounded-md py-2 px-5 text-center text-base font-medium focus:outline-none focus:ring-4 focus:ring-orange-200 duration-200`}
        >
          {props.name || 'Button'}
        </button>
      </a>
    </div>
  );
};

export default Button;
