import PhongPham from '/assets/img/team/PT.PHONG.png';
import MinhNguyen from '/assets/img/team/NKH.MINH.png';
import DatLe from '/assets/img/team/LT.DAT.png';
import HieuNguyen from '/assets/img/team/NC.HIEU.png';
import DucNguyen from '/assets/img/team/NQ.DUC.png';
import DuongCao from '/assets/img/team/CH.DUONG.png';
import VisionSlider from './VisionSlider';

export default function MeetTheTeam() {
  const teams = [
    {
      id: 1,
      name: 'Phong Pham',
      avatar: PhongPham,
      poisiton: 'Founder, Lead Engineer',
    },
    {
      id: 2,
      name: 'Dat Le',
      avatar: DatLe,
      poisiton: 'Mechanical Engineer',
    },
    {
      id: 3,
      name: 'Minh Nguyen',
      avatar: MinhNguyen,
      poisiton: 'Mechanical Engineer',
    },
    {
      id: 4,
      name: 'Hieu Nguyen',
      avatar: HieuNguyen,
      poisiton: 'Mechanical Engineer',
    },
    {
      id: 5,
      name: 'Duc Nguyen',
      avatar: DucNguyen,
      poisiton: 'Administrator, Lead Artist',
    },
    {
      id: 6,
      name: 'Duong Cao',
      avatar: DuongCao,
      poisiton: 'Developer',
    },
  ];
  return (
    <>
      <h3 className='heading text-center text-h3 uppercase font-bold'>
        Meet The Team
      </h3>
      <div className='slide-show mt-8'>
        <VisionSlider data={teams} />
      </div>
    </>
  );
}
