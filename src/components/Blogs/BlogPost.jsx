import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import defaultBanner from '../../assets/images/blog-post-banner.jpg';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

BlogPost.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default function BlogPost({ blog }) {
  const listTag = blog.tag.split(', ');
  return (
    <React.Fragment>
      <div className='h-[450px] w-full border-4 dark:border-black-700 rounded-2xl shadow-xl'>
        <img
          src={blog.image ?? defaultBanner}
          alt='banner'
          className='h-full w-full object-cover rounded-xl'
        />
      </div>
      <div id='Content' className='relative mt-[-200px] w-full z-10'>
        <div className='max-w-4xl bg-black-none dark:bg-black-900 mx-auto py-14 px-16 rounded-3xl shadow-xl'>
          <Link
            to='/blog'
            className='ml-[-20px] w-fit flex items-center justify-start gap-3 cursor-pointer text-sm hover:bg-black-50 dark:hover:bg-black-800 py-2 px-4 rounded-full duration-200 font-semibold opacity-70 hover:opacity-100'
          >
            <MdOutlineArrowBackIos size={13} />
            <span>All post</span>
          </Link>
          <h1
            id='title'
            className='text-left font-extrabold mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl'
          >
            {blog.title}
          </h1>
          <div
            id='author'
            className='mt-4 mb-5 flex items-center justify-start gap-2'
          >
            <span className='text-primary-900 font-semibold tracking-wide'>
              CSD Vietnam
            </span>
            <GoDotFill size={7} className='text-primary-900' />
            <span id='time' className='tracking-wide'>
              {blog.createAt}
            </span>
          </div>
          {/* <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className='mt-10 text-justify w-full'
          ></div> */}
          <p className='text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque in
            enim ratione sed molestias quod quae dolorum omnis fugiat, non
            consectetur blanditiis accusamus modi libero nemo, ullam rerum
            alias? Cupiditate? Dolor rem asperiores architecto, blanditiis non
            facilis sequi, dolores natus mollitia enim neque debitis molestias.
            Debitis provident quod illum, alias cupiditate, vel illo quas
            laborum ut, recusandae accusamus magni id? Adipisci, nesciunt.
            Consectetur, fuga! Eaque earum accusantium consequatur, harum
            blanditiis ducimus necessitatibus minus nam illum vitae quasi rem
            consectetur aliquam et adipisci hic ut odio nesciunt magni.
            Pariatur, ipsum harum! Iste ullam exercitationem nisi dicta
            temporibus. Praesentium suscipit delectus possimus porro minus vel
            saepe. Inventore hic sint quibusdam et exercitationem animi
            assumenda recusandae est, quis eius obcaecati atque maxime amet?
            Molestiae beatae nihil possimus iste deserunt culpa quae, labore
            quibusdam nobis dolores placeat id ullam ad distinctio alias magni
            tempore quaerat necessitatibus nulla dignissimos quasi assumenda at.
            Natus, deleniti quod! Quam quo fugit eos perferendis magnam
            excepturi labore eaque maxime! Cupiditate, fugiat consectetur
            aperiam sapiente optio totam? Nostrum rerum quisquam illo dicta
            repudiandae cumque harum? Quasi ipsam delectus impedit voluptatem.
            Nobis provident voluptatem odio vero dolor eos, velit aspernatur
            perspiciatis ullam fugiat cupiditate, a non ab soluta sunt mollitia
            expedita officia corrupti repellendus unde obcaecati veniam! Nostrum
            dignissimos expedita rem! Tempora reprehenderit sapiente ab vel
            rerum fugiat nam voluptatum, voluptate perspiciatis est recusandae
            dicta assumenda? Laborum illum, totam earum ipsam modi cupiditate
            voluptatum sed. Sequi aliquid ab nobis alias corrupti. Suscipit eius
            quisquam magni ex dolore fuga nobis accusantium consequatur itaque
            error cupiditate cum culpa, illum, quibusdam possimus obcaecati
            aliquid reprehenderit iste. Facere magnam est vero maiores sed, at
            pariatur! Cumque natus laboriosam vitae sapiente? Reprehenderit,
            fuga iusto pariatur fugiat laudantium omnis dolor sunt voluptates
            perspiciatis expedita similique mollitia beatae sit nisi earum. Quam
            labore inventore dolore, sunt error iure. Provident tempore quae
            ullam, pariatur vel rem aut illum fugiat obcaecati ipsa beatae
            placeat atque laborum eos expedita, cupiditate cumque, natus
            dignissimos unde? Ipsam molestiae quasi, culpa tempore ducimus
            quaerat! Eligendi hic aspernatur ad cumque voluptatibus suscipit aut
            enim ipsum repellendus earum reprehenderit, quae atque in blanditiis
            ut impedit dolorum vel pariatur iusto quibusdam. Omnis vitae iure
            quis quam recusandae. Unde quas placeat qui tenetur nemo molestiae
            ratione quibusdam architecto? Modi magnam in neque excepturi
            aliquam, nemo dignissimos fugiat vel deserunt facilis. Commodi eum
            nulla asperiores ducimus! Temporibus, asperiores ex. Quasi
            consectetur totam eligendi aut ab illo quod quam quos a deleniti
            dolor sit at tempore qui odit ea ipsum ipsa vero, provident unde
            suscipit ipsam quis error! Harum, unde. Adipisci debitis ducimus
            mollitia id reprehenderit eum ipsam dolor aut explicabo sunt,
            voluptate quod quaerat quo provident doloremque qui rerum facere
            est. Voluptas minus quaerat ex recusandae non laborum qui. Rem quos
            temporibus velit voluptate doloribus libero ratione est voluptas.
            Cupiditate dolores nulla voluptates! Vero quos, nulla voluptatem
            quod corrupti id molestias reprehenderit amet, quasi ipsum
            repudiandae! Omnis, labore quis. Praesentium, sapiente dolores quos
            repudiandae architecto sunt ipsum rem eos, earum, ullam eius. Cumque
            deserunt asperiores dicta corporis, quos, alias vel nobis a
            excepturi enim, quia ipsa voluptate maxime sunt. Possimus iure quo
            iste ad corporis veritatis voluptates. Dolor officia, soluta vero
            non rerum adipisci laudantium, exercitationem eum, corporis quo
            cupiditate quibusdam! Quibusdam culpa corrupti harum magni atque
            deleniti facere! Deleniti beatae in delectus voluptatem, quae vel
            tempora nihil numquam aut adipisci necessitatibus odit eos aliquid,
            itaque sed, maxime soluta iusto dignissimos accusantium eveniet
            enim! Vel rem hic ipsum cumque. Ad beatae blanditiis, repellendus
            consequuntur delectus, nam ratione nostrum maiores quaerat, officia
            sunt. Culpa dolorum veritatis repellat enim omnis quae dignissimos
            soluta voluptas. Similique incidunt consequatur laborum, asperiores
            distinctio pariatur.
          </p>
          <div id='tag' className='my-8 flex gap-5'>
            {listTag?.map((tag, index) => (
              <div key={index}>
                <Button
                  size='sm'
                  href={`#${tag}`}
                  className='px-3 bg-transparent border-2 border-primary-900 font-semibold text-black-800 dark:text-black-none hover:bg-primary-900  hover:border-transparent focus:ring-0 dark:bg-transparent dark:hover:bg-primary-800 duration-150'
                >
                  #{tag}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
