import {useParams} from 'react-router';
import {Helmet} from 'react-helmet';
import CategoryGallery from "../components/CategoryGallery.jsx";
import Header from '../components/Header';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';
import categoriesData from '../data/category';
import {useEffect} from 'react';
import BreadCrumbs from "../components/BreadCrumbs.jsx";

function Category() {
    const {href} = useParams();
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    const category =
        categoriesData?.find((x) => {
            return x.href === href;
        }) ?? {};
    return (
        <>
            <Helmet>
                <link rel='icon' type='image/svg+xml' href='../../public/favicon.ico'/>
                <title>{category.name ? `${category.name} | CSD Vietnam` : ''}</title>
                <meta name='description' content='Helmet application'/>
            </Helmet>
            <Header/>
            <FloatingButton/>
            <main className='py-[72px]'>
                <BreadCrumbs type='Category' name={category.name} href={category.href} />
                <section className='mt-10'>
                    <CategoryGallery dataCategory={category}/>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Category;
