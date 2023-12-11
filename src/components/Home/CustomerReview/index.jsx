import Fiverr from '../../../assets/images/customer/fiverr.png';
import dhruvalpatel113 from '../../../assets/images/customer/2.1.png';
import alfrednorrls365 from '../../../assets/images/customer/5.1.png';
import jonjapltana from '../../../assets/images/customer/8.1.png';
import amara_vayder from '../../../assets/images/customer/9.1.png';
import the7express from '../../../assets/images/customer/10.1.png';
import novoal from '../../../assets/images/customer/12.1.png';
import theaaronestrada from '../../../assets/images/customer/13.1.png';
import jemueljeremlah from '../../../assets/images/customer/14.1.png';
import CustomerSlider from './CustomerSlider';

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: 'bazzyman62',
      avatar: Fiverr,
      country: 'Canada',
      rate: 5,
      comment:
        'INCREDIBLE work ethic, design ability and communication. Very proficient i his craft. I took a chance on him knowing he was new on fiverr. It was a great decision. I would highly recommend and will use them for 3 more projects. I trust them fully.',
    },
    {
      id: 2,
      name: 'dhruvalpatel113',
      avatar: dhruvalpatel113,
      country: 'India',
      rate: 5,
      comment:
        'It was very convenient to work with phong. I would definitely recommend this mans effort to fulfill the requirements and urgency of the projects. I really appreciate the work done. awesome guy to work with.',
    },
    {
      id: 3,
      name: 'bayronalexan157',
      avatar: Fiverr,
      country: 'Colombia',
      rate: 5,
      comment:
        'Excellent person to work with very good communication understood the design from isomertric image and was able to make 3 model for fabrication. I very please to work with PHONG highly recommended by me - as and true engineer and look forward to completing many project in the future he is definitely someone to be part of your design team.',
    },
    {
      id: 4,
      name: 'deboudek',
      avatar: Fiverr,
      country: 'Germany',
      rate: 5,
      comment:
        'Excellent service, beyond expectations, great results, earlier than the promised date. He has much experience in mechanical design, you need to give him instructions and wait for the result without any more complications. 100% recommended, we definitely will keep working together.',
    },
    {
      id: 5,
      name: 'alfrednorrls365',
      avatar: alfrednorrls365,
      country: 'United States',
      rate: 5,
      comment:
        "Absolutetly phenomenal work. Fast, accurate, easy to communicate with. Very respectful and professional. Will use again. Do not hesitate to use him if you are thinking about doing it. You won't regret it. Made revisions without being defensive or complaining.",
    },
    {
      id: 6,
      name: 'kemelkheloulati',
      avatar: Fiverr,
      country: 'Algeria',
      rate: 5,
      comment:
        'I recently had the privilege of utilizing the CAD services provided by Phong, and I must say they were truly excoptional. He demonstrated an unparalleled lovel of professionalism and expertise, translating my requirements into precise and detailed CAD designs. Ther attention to detail was remarkabl.',
    },
    {
      id: 7,
      name: 'praxmarket',
      avatar: Fiverr,
      country: 'United Kingdom',
      rate: 5,
      comment:
        'I was 50 pleased with the service. I received from Phong. He went above and beyond to help me find the. I perfoct design. I was very impressed with the quality of the product I received. I wil definitely place my next order with Phong.',
    },
    {
      id: 8,
      name: 'jonjapltana',
      avatar: jonjapltana,
      country: 'United States',
      rate: 5,
      comment:
        'Phamtienphong s a very talented and resourceful individual its always a pleasure working with him. Will continue to work with him in the future.',
    },
    {
      id: 9,
      name: 'amara_vayder',
      avatar: amara_vayder,
      country: 'United States',
      rate: 5,
      comment:
        'He was such a pleasure to work with. He delivered the work on time. He was very communicative and helpful. He was attentive and patient. He exceeded my expectations. Would definitely work with him again. Fantastic work very detailed.',
    },
    {
      id: 10,
      name: 'the7express',
      avatar: the7express,
      country: 'United States',
      rate: 5,
      comment:
        "After 3 other sellers couldn't build the train exactly as I wanted, I gave CSD a chance and they were on point with every detail and made the train exactly as real life. Will order from again!",
    },
    {
      id: 11,
      name: 'panther343',
      avatar: Fiverr,
      country: 'United States',
      rate: 5,
      comment:
        'An absolutely amazing job. Final rendering came out better than expected. Csd.phongpham pays close attention to detail and s very patient with all your request, would definitely be using him again!',
    },
    {
      id: 12,
      name: 'novoal',
      avatar: novoal,
      country: 'Germany',
      rate: 5,
      comment:
        "phamtienphong is a mastermind in CAD design for injection molds, seamlessly blending years of experlence into each intricate detail. Their designs aren't just functional; they're optimized masterpieces that simplify the molding process. Throughout our collaboration, communication was top-notch, with every design choice backed by sound rationale. If expertise and precision are what you seek in mold design, look no further than phamtienphong. Their work is the gold standard in the industry. Thank you again!",
    },
    {
      id: 13,
      name: 'theaaronestrada',
      avatar: theaaronestrada,
      country: 'United States',
      rate: 5,
      comment:
        'I am very impressed with the CAD drawing I received. The drawings are clear, accurate, and well- Iabeled. The dimensions are precise, and the overall quality is excellent. I would highly recommend this company to anyone who needs CAD drawings. I especially appreciate the fact that the company was able to accommodate my specific requests. They were very responsive to my questions and concerns, and they were always willing to go the extra mile to make sure that I was happy with the final product. I would definitely use this company again in the future, and I would not hesitate to recommend them to others.',
    },
    {
      id: 14,
      name: 'jemueljeremlah',
      avatar: jemueljeremlah,
      country: 'United States',
      rate: 5,
      comment:
        "I Am very very satisfied with the work done for me. He delivered the most excellent diagrams and I explanations of them. He was so thorough and timely he delivered his work on time just like he said he I would. He is one that can bring your imagination to real life and he's the man for any job in this :category, in this field. I highly recommend him!",
    },
  ];
  return (
    <div className='border-b border-solid border-gray-200 dark:border-gray-700 bg-gradient-to-b from-black-none to-black-50 dark:from-black-900 dark:to-black-800'>
      <div className='container w-full py-20'>
        <h3 className='font-bold text-center uppercase text-2xl sm:text-3xl xl:text-4xl'>
          <span className='bg-gradient-to-b from-black-700 to-black-900 dark:from-black-none dark:to-black-200 inline-block text-transparent bg-clip-text'>
            Customer Review
          </span>
        </h3>
        <div className='mt-10 mb-6 sm:mt-16 sm:mb-12 lg:mt-20 lg:mb-16 xl:mt-24 xl:mb-20'>
          <CustomerSlider dataSlide={reviews} />
        </div>
      </div>
    </div>
  );
}
