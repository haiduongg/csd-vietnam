import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Header/Sidebar';
import DashboardHome from '../components/DashboardHome';
import DashboardCategories from '../components/DashboardCategories';
import DashboardProjectList from '../components/DashboardProjectList';
import DashboardServiceList from '../components/DashboardServiceList';

function Dashboard() {
  return (
    <div className='w-screen'>
      <Helmet>
        <title>Dashboard | CSD Vietnam</title>
        <meta name='description' content='Helmet application' />
      </Helmet>
      <div className='flex'>
        <aside>
          <Sidebar />
        </aside>
        <main className='pl-[140px] w-full my-5'>
          <Routes>
            <Route path='/' element={<DashboardHome />} exact />
            <Route path='/projects' element={<DashboardProjectList />} />
            <Route path='/services' element={<DashboardServiceList />} />
            <Route path='/categories' element={<DashboardCategories />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
