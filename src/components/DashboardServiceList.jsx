import { Button, Modal, Table, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const PopupModal = ({ openModal, setOpenModal }) => {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Edit Services Detail</Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className='flex justify-between'>
        <Button color='gray' onClick={() => setOpenModal(false)}>
          No, cancel
        </Button>
        <Button onClick={() => setOpenModal(false)} color='success'>
          Yes, update now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
PopupModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

const ServicesTable = () => {
  const [services, setServices] = useState([]);
  const [popup, setPopup] = useState(false);
  const [post, setPost] = useState({
    id: '',
    name: '',
    href:'',
    content:'',
    thumbnail:'',
    img: []
  })
  useEffect(() => {
    // fetch API
    const getData = async () => {
      const response = await axios.get(
        'https://api-csd-vietnam.vercel.app/services'
      );
      const data = await response.data;
      setServices(data);
    };
    getData();
  }, []);
  return (
    <div className='w-[calc(100%-85px)]'>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
          <Table.HeadCell>Content</Table.HeadCell>
          <Table.HeadCell>Thumbnail</Table.HeadCell>
          <Table.HeadCell>Images</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Action</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {services?.map((item) => (
            <Table.Row
              className='bg-white dark:border-gray-700 dark:bg-gray-800'
              key={item.id}
            >
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.href}</Table.Cell>
              <Table.Cell>
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className='mt-3'
                ></div>
              </Table.Cell>
              <Table.Cell>{item.thumbnail}</Table.Cell>
              <Table.Cell className='w-[50px]'>
                {item?.img.map((item) => (
                  <img src={item.src} key={item.id} alt={item.id} />
                ))}
              </Table.Cell>
              <Table.Cell>
                <Button
                  color='warning'
                  onClick={() => {
                    setPost({
                      id: item.id,
                      name: item.name,
                      href: item.href,
                      content: item.content,
                      thumbnail: item.thumbnail,
                      img: item.img
                    })
                    setPopup(true);
                  }}
                >
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <PopupModal openModal={popup} setOpenModal={setPopup} />
    </div>
  );
};

function DashboardServiceList() {
  return (
    <div className='min-h-screen'>
      <h3>Service List</h3>
      <div className='mt-6'>
        <ServicesTable />
      </div>
    </div>
  );
}

export default DashboardServiceList;
