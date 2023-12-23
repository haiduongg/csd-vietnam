import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import Send from '../../assets/images/Carrers/send.json';

CarrersContent.propTypes = {
  dataImage: PropTypes.string.isRequired,
};
export default function CarrersContent({ dataImage }) {
  const contact = [
    {
      id: 1,
      title: 'Fanpage',
      highlight: 'CSD Vietnam',
      href: 'https://facebook.com/CSD.Vie',
    },
    {
      id: 2,
      title: 'Facebook admin',
      highlight: 'Phạm Tiền Phong',
      href: 'https://facebook.com/pt.phong99',
    },
    {
      id: 3,
      title: 'Skype (nền tảng làm việc chính)',
      highlight: 'live:.cid.484f3503905e6563',
      href: 'skype:live:.cid.484f3503905e6563',
    },
  ];
  return (
    <div className='flex justify-start items-start gap-10'>
      <img
        src={dataImage}
        alt='Carrer Photo'
        width={400}
        className='rounded-xl'
      />
      <div id='content' className='mt-3 leading-loose'>
        <p>
          <div className='flex items-center gap-3'>
            <div className='w-14'>
              <Lottie animationData={Send} loop={true} />
            </div>
            <div className='inline-block uppercase font-bold text-2xl'>
              <span>Cộng tác viên đồng hành cùng</span>
              <span className='ml-1 text-primary-900'>CADSQUAD</span>
            </div>
          </div>
          <br />
          Chúng tôi đang tìm kiếm các bạn Engineering Freelancers có đam mê và
          tài năng trong các lĩnh vực: Industrial & Product Design, 3D Modeling
          & Rendering, 3D printing, ...
          <br />
          <br />
          <span className='font-semibold'>Yêu cầu:</span>
          <ul className='list-disc ml-10 leading-loose'>
            <li>
              <span>
                Thành thạo một trong các phần mềm kỹ thuật như Autodesk
                Inventor, Solidworks, Fusion 360, Catia, NX, 3DS Max, Maya,
                Blender, Zbrush... hoặc các phần mềm kỹ thuật tương tự.
              </span>
            </li>
            <li>
              <span>
                Khả năng tạo ra mô hình 3D chất lượng cao và thực hiện các quá
                trình rendering đẹp mắt.
              </span>
            </li>
            <li>
              <span>Kỹ năng làm việc độc lập và tuân thủ Deadline.</span>
            </li>
            <li>
              <span>
                Có kinh nghiệm trên các nền tảng Fiverr, Upwork là một điểm
                cộng.
              </span>
            </li>
            <li>
              <span>
                Đang sinh sống và làm việc tại TP.HCM, English tốt là một lợi
                thế.
              </span>
            </li>
            <li>
              <span>Làm việc qua Skype, đảm bảo sự linh hoạt.</span>
            </li>
            <li>
              <span>Nhận thanh toán ngay khi Completed Job.</span>
            </li>
          </ul>
          <br />
          <span className='font-semibold'>Chi tiết liên hệ:</span>
          <ul className='list-disc ml-10 leading-loose'>
            {contact.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>:</span>
                <a
                  href={item.href}
                  className='ml-1 border-b-2 border-solid border-gray-400 hover:border-primary-900 hover:text-primary-900 duration-100'
                  target='_'
                >
                  {item.highlight}
                </a>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}
